const gallerySlider = new Swiper('.moveSlider', {
    spaceBetween: 30,
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 3500
    },
    breakpoints: {
        767: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        1200: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        1500: {
            slidesPerView: 2,
            spaceBetween: 30
        },
    },
});

const commentSlider = new Swiper('.commentSlider', {
    spaceBetween: 30,
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 3500
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1022: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
});

// albumSwiper
var swiper = new Swiper(".albumSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});



// scroll button
window.addEventListener('scroll', function() {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('activeScroll', window.scrollY > 300)
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}