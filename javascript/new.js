const newsSwiper = new Swiper('.newsSwiper', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,

    navigation: {
        nextEl: '.news-next',
        prevEl: '.news-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }

});
const reviewsSwiper = new Swiper('.reviewsSwiper', {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});