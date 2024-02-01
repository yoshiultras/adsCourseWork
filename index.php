<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
	<script src="https://api-maps.yandex.ru/2.1/?apikey=14c6b200-64c7-4bbd-a40f-2ed96b9e5d15&lang=ru_RU"></script>
	<script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript"></script>
	<script src="panel.js"></script>
	<script src="script.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
	<div id="mapContainer" class="map"></div>
    <div class='container mt-5'>
		<div class='row'>
			<div class="col-sm-3 d-flex align-items-stretch">
				<button class="category-button" data-category="Щит">Щит</button>
			</div>
			<div class="col-sm-3 d-flex align-items-stretch">
				<button class="category-button" data-category="Суперсайт">Суперсайт</button>
			</div>
			<div class="col-sm-3 d-flex align-items-stretch">
				<button class="category-button" data-category="Остановка транспорта">Остновка</button>
			</div>
			<div class="col-sm-3 d-flex align-items-stretch">
				<button class="category-button" data-category="Тумба">Тумба</button>
			</div>
		</div>
		<div class='row'>
			<div class="col-sm-3 d-flex align-items-stretch">
				<button class="category-button" data-category="Медиафасад">Медиафасад</button>
			</div>
			<div class="col-sm-3 d-flex align-items-stretch">
				<button class="category-button" data-category="Сити-борд">Сити-борд</button>
			</div>
			<div class="col-sm-3 d-flex align-items-stretch">
				<button class="category-button" data-category="Сити-формат">Сити-формат</button>
			</div>
			<div class="col-sm-3 d-flex align-items-stretch">
				<button class="category-button" data-category="Суперборд">Суперборд</button>
			</div>
		</div>
		
		
		<button class="reset-button">Сброс</button>
  	</div>
	
</body>
</html>