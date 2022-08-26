var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
});

const select1 = new CustomSelect('#select-1');

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('tabs-nav__btn--active') });
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabsItem.forEach(function(element) { element.classList.remove('tabs-item--active') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

let tabsBtn2 = document.querySelectorAll('.tabs-nav__btn2');
let tabsItem2 = document.querySelectorAll('.tabs-item2');

tabsBtn2.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn2.forEach(function(btn) { btn.classList.remove('tabs-nav__btn--active2') });
        e.currentTarget.classList.add('tabs-nav__btn--active2');

        tabsItem2.forEach(function(element) { element.classList.remove('tabs-item--active2') });
        document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active2');
    });
});


new Accordion('.accordion-container');

const validate = new window.JustValidate('#form');

const validation = new JustValidate('#form');

validation
    .addField('#name', [{
            rule: 'minLength',
            value: 3,
            errorMessage: "Минимум 3 буквы"
        },
        {
            rule: 'maxLength',
            value: 30,
        },
        {
            rule: 'customRegexp',
            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/,
            errorMessage: 'Недопустимый формат'
        },
    ]);

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 100,
    breakpoints: {
        768: {
            pagination: {
                enabled: false,
            },
        },
    },
});

const swiper2 = new Swiper('.swiper-container-2', {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-events-next',
        prevEl: '.swiper-button-events-prev',
    },
    pagination: {
        el: '.events-pagination',
        type: 'bullets',
        clickable: true, 
    },
    breakpoints: {
        1920: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 50,
        },
        1024: {
            spaceBetween: 25,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 10,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    },
    initialSlide: 3,
    spaceBetween: 50,
    maxBackfaceHiddenSlides: 3,
});

const swiper3 = new Swiper('.swiper-container-3', {
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.projects-button-next',
        prevEl: '.projects-button-prev',
    },
    breakpoints: {
        1920: {
            spaceBetween: 50,
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 33,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 20,
        }
    },
    spaceBetween: 50,
});

const swiper4 = new Swiper('.swiper-container-4', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: ".gallery-pagination",
        type: "fraction",
    },
    breakpoints: {
        1920: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            loop: true,
        },
        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 38,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.758468, 37.601088],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),
        

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([48.872185, 2.354224], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'А эта — новогодняя',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'IMG/1.svg',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});