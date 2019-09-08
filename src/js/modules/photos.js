$(document).ready(function(){
  let photos = [
   './assets/gallery1.png',
   './assets/gallery3.png',
   './assets/gallery2.png',
   './assets/gallery3.png',
   './assets/gallery4.png',
   './assets/gallery1.png',
   './assets/gallery2.png',
    './assets/gallery3.png'
  ];
  
  let list = $('.photos__list');
  $(".add-photo__btn").click(function(e){
    e.preventDefault();
    for(var i = 0; i < photos.length;i++){
    $('.photos__list').append('<li class = photos__item></li>');
    }

    for(let i=8; i<list.children().length; i++)
      $(".photos__item").eq(i).prepend('<img class = photos-img></img>');
  })

});