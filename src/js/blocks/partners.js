import $ from 'jquery';
import 'owl.carousel';

function partnersCarousel() {
    const $slider = $('[data-carousel="partners"]');

    if ($slider.length) {
        $slider.owlCarousel({
            nav: false,
            dots: true,
            smartSpeed: 700,
            startPosition: 1,
            loop: true,
            responsive: {
                320: {
                    autoWidth: false,
                    responsiveClass: true,
                    margin: 20,
                    items: 1,
                    center: true,
                    dots: false,
                    loop: false
                },
                1020: {
                    autoWidth: false,
                    responsiveClass: true,
                    margin: 35,
                    items: 3,
                    center: true,
                    loop: true
                },
                1360: {
                    autoWidth: false,
                    responsiveClass: true,
                    items: 3,
                    center: true,
                    margin: 47,
                    loop: true
                }
            }
        });
    }
}

export default partnersCarousel;
