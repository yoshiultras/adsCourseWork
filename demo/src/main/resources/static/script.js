const pointsData = []
const mapDiv = document.querySelector("map");
const getData = async () => {
  try {
      const res = await fetch("http://localhost:8080/api/v1/ads", {
          method: "GET",
          mode: 'cors',
          headers: {
              "Content-Type": "application/json"
          }
      });

      const output = await res.json();
      if (output.empty === "empty") {
          
      } else {
          for (var i in output) {
            pointsData.push({
              lat: output[i].lat,
              lon: output[i].lon,
              owner: output[i].owner,
              type: output[i].type,
              address: output[i].address,
              size: output[i].size,
              tech: output[i].tech,
              number: output[i].number
            })
          }
      }
  } catch (error) {
      console.log("error " + error)
  }
}

getData();


ymaps.ready(['Panel']).then(function () {
  
    const map = new ymaps.Map('mapContainer', {
      center: [55.753215, 37.622504],
      zoom: 11,
      controls: ['zoomControl']
    }), clusterer = new ymaps.Clusterer({

      groupByCoordinates: false,
      clusterDisableClickZoom: false,
      gridSize: 120,
      clusterHideIconOnBalloonOpen: false,
      geoObjectHideIconOnBalloonOpen: false
    });
    var panel = new ymaps.Panel();
    map.controls.add(panel, {
        float: 'left'
    });
    geoObjects = [];
  
    let activeCategory = "Щит";
    function getColor(item){
      switch(item.type) {
        case "Щит":
          return '#3b5998'
      }
    }
    const showAll = () => {
      document.getElementById("mapContainer").style.display = "flex";
      map.geoObjects.removeAll();
      clusterer.removeAll();
      geoObjects.length = 0;
      i = 0;
      pointsData.forEach((item) => {

            let placeMark = new ymaps.Placemark([item.lat, item.lon], {
            hintContent: item.owner,
            
            content: ["Владелец:", item.owner, "\n", "Адрес:", item.address, "Номер:", item.number].join(" ")
            
          }, {
            iconColor: getColor(item),
          });
          
            placeMark.events.add('click', function (e) {
              var target = e.get('target');
              panel.setContent(target.properties.get('content'));
              
          });
          geoObjects[i++] = placeMark
        
      });
      clusterer.add(geoObjects);
      map.geoObjects.add(clusterer);
    }
    const showCategory = (category) => {
      document.getElementById("mapContainer").style.display = "flex";
      map.geoObjects.removeAll();
      clusterer.removeAll();
      geoObjects.length = 0;
      i = 0;
      pointsData.forEach((item) => {
        if (item.type === category) {
          let placeMark = new ymaps.Placemark([item.lat, item.lon], {
            hasBalloon: false,
            hintContent: item.owner,
            iconColor: '#3b5998',
            content: ["Владелец:", item.owner, "Адрес:", item.address, "Номер:", item.number].join(" ")
            
          });
          
            placeMark.events.add('click', function (e) {
              // Получим ссылку на геообъект, по которому кликнул пользователь.
              var target = e.get('target');
              // Зададим контент боковой панели.
              panel.setContent(target.properties.get('content'));
              // Переместим центр карты по координатам метки с учётом заданных отступов.
              
          });
          geoObjects[i++] = placeMark
        }
      });
      clusterer.add(geoObjects);
      map.geoObjects.add(clusterer);
      activeCategory = category;
    }
  
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.category;
        showCategory(category);
      });
    });
    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', () => {
      showAll();
    })
  });



