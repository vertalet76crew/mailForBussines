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
            margin: 32,
            responsive: {
                320: {
                    autoWidth: false,
                    responsiveClass: true,
                    margin: 0,
                    items: 1,
                    center: false
                },
                1020: {
                    autoWidth: false,
                    responsiveClass: true,
                    margin: 20,
                    items: 3,
                    center: true
                },
                1360: {
                    autoWidth: false,
                    responsiveClass: true,
                    items: 3,
                    center: true
                }
            }
        });
    }
}

export default partnersCarousel;
