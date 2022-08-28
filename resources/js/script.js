$(document).ready(function(){

    /* For the stick navigation */
    var waypoint = new Waypoint({
        element: document.querySelector('.section-about'),
        handler: function(direction) {
          if(direction == "down"){
              $('.stick-bar').addClass('stick');
          }else{
              $('.stick-bar').removeClass('stick');
          }
        },
        offset: 60
      });
});

const menu = document.querySelector('.menu');
const navbar = document.querySelector('.nav-bar');
const closeMenu = document.querySelector('.close-menu')

menu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
  navbar.style.display = 'flex';
  menu.style.display = 'none';
}

function close(){
  navbar.style.display = 'none';
  menu.style.display = 'block';
}