import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function ourClientsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-our-clients-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 4,
            speed: 500,
            watchOverflow: true,
            spaceBetween: 100,
            navigation: {
                nextEl: element.querySelector('.clients__our-clients-block-slider-arrow--next'),
                prevEl: element.querySelector('.clients__our-clients-block-slider-arrow--prev')
            }
        });
    });
}
