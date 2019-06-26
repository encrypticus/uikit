ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [37.791829, -122.413451],
    controls: [],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14
  });

  var placeMark = new ymaps.Placemark(
      [37.791829, -122.413451],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: require("./img/marker.svg"),
        iconImageSize: [59, 60]
      }
  );

  myMap.geoObjects.add(placeMark);
  // myMap.controls.remove('zoomControl');
  // myMap.controls.remove('geolocationControl');
  // myMap.controls.remove('searchControl');
  // myMap.controls.remove('routeButtonControl');
  // myMap.controls.remove('trafficControl');
  // myMap.controls.remove('typeSelector');
  // myMap.controls.remove('fullscreenControl');
}