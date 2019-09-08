// console.log("11111");

ymaps.ready(init);
function init()
  {
    var map = new ymaps.Map("map", {

      center: [55.75546639, 37.64524549],
      zoom: 13,
      controls: ['zoomControl'],
      behaviors: ['drag', 'dblClickZoom']
  });
  var myPlacemark = new ymaps.Placemark(
    [55.75510728, 37.61256579] , {
      balloonContentBody: "Встречаемся тут!",
            }, {
                    preset: 'islands#redStretchyIcon'
                });     
    map.geoObjects.add(myPlacemark);

  }
