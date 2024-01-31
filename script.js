const pointsData = []
const getData = async () => {
  try {

      const res = await fetch("select.php", {
          method: "GET",
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
      tbody.innerHTML = tr;
  } catch (error) {
      console.log("error " + error)
  }
}

getData();


  
  const init = () => {
    const map = new ymaps.Map('mapContainer', {
      center: [55.753215, 37.622504],
      zoom: 14,
      controls: ['zoomControl']
    }), clusterer = new ymaps.Clusterer({

      groupByCoordinates: false,
      clusterDisableClickZoom: false,
      gridSize: 160,
      clusterHideIconOnBalloonOpen: false,
      geoObjectHideIconOnBalloonOpen: false
    });
    geoObjects = [];
  
    let activeCategory = "Щит";
    const showAll = () => {
      map.geoObjects.removeAll();
      clusterer.removeAll();
      geoObjects.length = 0;
      i = 0;
      pointsData.forEach((item) => {

            geoObjects[i++] = new ymaps.Placemark([item.lat, item.lon], {
            hintContent: item.owner,
            balloonContentBody: ['<address>', item.owner, item.address, item.number, '</address>'].join(" ")
          });
          
        
        
      });
      clusterer.add(geoObjects);
      map.geoObjects.add(clusterer);
    }
    const showCategory = (category) => {
      map.geoObjects.removeAll();
      clusterer.removeAll();
      geoObjects.length = 0;
      i = 0;
      pointsData.forEach((item) => {
        if (item.type === category) {
            geoObjects[i++] = new ymaps.Placemark([item.lat, item.lon], {
            hintContent: item.owner,
            balloonContentBody: [item.owner, item.address, item.number].join(" ")
          });
          
          
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
    const resetButton = document.querySelector('.reset-button');
    resetButton.addEventListener('click', () => {
      showAll();
    })
    showAll();
  };
  
  ymaps.ready(init);