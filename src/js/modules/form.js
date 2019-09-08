$(document).ready(function(){

////////// КНОПКА ОТКРЫТИЯ МОДАЛЬНОГО ОКНА
  let overlay = $(".overlay");
  let btn = $(".reservation__button");
  let close = $(".overlay__close");

  btn.on('click', ()=> {
    overlay.addClass('overlay--active');
  });

  close.on('click', ()=>{

  overlay.removeClass('overlay--active');
  })

////////// МАСКИ НА ВВОД

$("#phone").mask("+7 (999) 999-99-99",{autoclear: false},{placeholder:"+7 (906) 184-81-40"});
$('#card-numder').on('input', (e) => { e.target.value = e.target.value.replace(/\D/g, '')})

})
