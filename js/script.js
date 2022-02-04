
let city = document.querySelector(".header__location");
let droplist = document.querySelector(".header__location__droplist");

city.addEventListener('click', function () {
   droplist.classList.toggle('droplist-open');
});

window.addEventListener('click', e => { // при клике в любом месте окна браузера
   const target = e.target; // находим элемент, на котором был клик
   if (!target.closest('.header__location__droplist') && !target.closest('.header__location')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      droplist.classList.remove('droplist-open') // то закрываем окно навигации, удаляя активный класс
   }
})
const mediaQuery = window.matchMedia('(max-width: 730px)');

if (mediaQuery.matches) {
   let headerBurger = document.querySelector('.header__burger');
   let navBurger = document.querySelector('.nav');
   let spanBurger = document.querySelectorAll('.header__burger-line');

   headerBurger.addEventListener('click', function () {
      navBurger.classList.toggle('nav-active');
      spanBurger.forEach(el => {
         el.classList.toggle('burger-active');
      });
   })

   let navButtonList = document.querySelectorAll(".nav-btn");

   function myFunction(event) {
      let navMenuItem = event.target.closest('li');
      let navDroplist = navMenuItem.querySelector('.sub-menu-container');
      navDroplist.classList.toggle('container-open');
      navMenuItem.classList.toggle('nav__menu__item-open');
   }



   navButtonList.forEach(navButton => {
      navButton.addEventListener('click', myFunction);
   });

   // window.addEventListener('click', e => { // при клике в любом месте окна браузера
   //    const target = e.target; // находим элемент, на котором был клик
   //    if (!target.closest('.sub-menu-container') && !target.closest('.nav-btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
   //       droplist.classList.remove('open') // то закрываем окно навигации, удаляя активный класс
   //    }
   // })
}
new Swiper('.swiper-gallery', {
   // Optional parameters
   loop: true,
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // for using keyboard
   keyboard: {
      enabled: true,
      onlyInViewPort: true,
   },

   // Amount of slides on page
   slidesPerView: 5,




   spaceBetween: 20,

   autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
   }, breakpoints: {

      991: {
         slidesPerView: 5,
      },
      730: {
         slidesPerView: 4,
      },
      560: {
         slidesPerView: 3,
      },
      440: {
         slidesPerView: 3,
      },
      320: {
         slidesPerView: 2,
      },
   },

   speed: 500,
});

new Swiper('.popup-swiper', {

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // for using keyboard
   keyboard: {
      enabled: true,
      onlyInViewPort: true,
   },

   // Amount of slides on page
   slidesPerView: 1,

   speed: 500,
});


new Swiper('.swiper-rooms', {
   // Optional parameters

   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   // for using keyboard
   keyboard: {
      enabled: true,
      onlyInViewPort: true,
   },


   // Amount of slides on page
   slidesPerView: 2,

   spaceBetween: 25,

   breakpoints: {

      480: {
         slidesPerView: 2,
      },
      320: {
         slidesPerView: 1,
      },
   },

   autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
   },


   speed: 500,
});



let openBooking = document.querySelector('.hotel-booking__btn');
let hotelBookingBlock = document.querySelector('.hotel-booking');
openBooking.addEventListener('click', function () {
   hotelBookingBlock.classList.toggle('hotel-booking-open');
});

var tabNavs = document.querySelectorAll(".amenities__nav__tab");
var tabPanes = document.querySelectorAll(".amenities__nav__tab-pane");

for (var i = 0; i < tabNavs.length; i++) {

   tabNavs[i].addEventListener("click", function (e) {
      e.preventDefault();
      var activeTabAttr = e.target.getAttribute("data-tab");

      for (var j = 0; j < tabNavs.length; j++) {
         var contentAttr = tabPanes[j].getAttribute("data-tab-content");

         if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("tab-active");
            tabPanes[j].classList.add("tab-active");
         } else {
            tabNavs[j].classList.remove("tab-active");
            tabPanes[j].classList.remove("tab-active");
         }
      };
   });
}
let popupBg = document.querySelector('.popup-bg'); // Фон попап окна
let popup = document.querySelector('.popup-swiper'); // Само окно
let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
let page = document.getElementById('page');

openPopupButtons.forEach((button) => { // Перебираем все кнопки
   button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add('popup-active'); // Добавляем класс 'active' для фона
      popup.classList.add('popup-active'); // И для самого окна
      page.style.overflow = 'hidden';
   })
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
   if (e.target === popupBg) { // Если цель клика - фот, то:
      popupBg.classList.remove('popup-active'); // Убираем активный класс с фона
      popup.classList.remove('popup-active'); // И с окна
      page.style.overflow = 'visible';
   }
});