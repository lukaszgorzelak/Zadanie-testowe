
const innerWidth = window.innerWidth;

   new Splide( '.splide', {
       pagination  : false,
       arrows:true,
       perPage    : 1,
       perMove    : 1,
       height     : '5rem',
       width      : '100%',
       fixedHeight: '4rem',
       focus      : 'left',
       trimSpace  : true,
       autoWidth: true,
       autoHeight: true,
       breakpoints: {
        1200: {
          pagination  : true,
          arrows:true,
          perPage    : 1,
          perMove    : 1,
          height     : '5rem',
          width      : '100%',
          fixedHeight: '4rem',
          focus      : 'left',
          trimSpace  : true,
          autoWidth: true,
          autoHeight: true,
        },
        370:{
          perPage: 2,
          focus: 'center',
          trimSpace  : false,
        }
      },
   } ).mount();
  
const close = document.querySelector('#modal__close');
const play = document.querySelector('#play');
const modal = document.querySelector('#modal');
let mask = document.createElement("div");

const body = document.body;

play.addEventListener('click', function(){
  modal.style.display = "flex";
  mask.classList.add("mask");
  body.appendChild(mask);
})

close.addEventListener('click', function(){
  modal.style.display = "none";
  mask.classList.remove('mask');
})
  
