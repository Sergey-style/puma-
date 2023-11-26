$(document).ready(function(){
   $('.header_burger').click(function(event){/*при клике на бургер что-то будет происходить*/
   	  $('.header_burger,.header_menu').toggleClass('active');/*добавятся классы при нажатии .header_burger,.header_menu* при повторном наж уберуться*/
   	  $('body').toggleClass('lock');/*блокируется скрол под выехавшем меню*/
   });
});