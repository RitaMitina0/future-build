$(document).ready(function(){

  //ЗАМЕНА ФОТОГРАФИЙ В ПЕРВОЙ СЕКЦИИ
  if($(window).width() <= 480) {
  let list = $(".service_description__list");

  list.append('<li class = service_description__item></li>');
  
  $('.service_description__item:last')
  .prepend('<img class = service_description__img></img>')
  .append('<span></span>');

  let photos = [
   {"src":"./assets/clockA.svg",
    "text":"3 часа съемки"  },
   {"src": "./assets/msg.svg",
   "text":"Русский" },
    {"src":"./assets/money.svg'",
    "text":"От 850$" },
   { "src":"./assets/marker.svg",
   "text":"Дубаи" },
    {"src":"./assets/photo.svg",
    "text":"Более 50 фотографий" 
  }
   ];

  $('.service_description__item').each(function(i){
      $(this).find('img').attr('src', photos[i].src);
      $(this).find('span').text(photos[i].text);
    })

}
  
})
