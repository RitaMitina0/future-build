
let link = $(".more__link")
let activeClass = 'about__text-all--active';
link.click(function(){
event.preventDefault();

  var sibling = $(this).siblings();

  if (sibling.hasClass(activeClass)){
    link.siblings().removeClass(activeClass);
  }else{
    link.siblings().removeClass(activeClass);
    sibling.addClass(activeClass);
  }	
});