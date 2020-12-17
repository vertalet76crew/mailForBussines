import $ from 'jquery';
import 'owl.carousel';

function partnersCarousel() {
    $(window).on('load resize', function() {
        if ($(window).width() <= 768) {
            const $slider = $('[data-carousel="partners"]');
            console.log($slider);
            if ($slider.length) {
                $slider.owlCarousel({
                    nav: false,
                    dots: true,
                    smartSpeed: 2000,
                    startPosition: 1,
                    fluidSpeed: 2000,
                    dotsSpeed: 2000,
                    dragEndSpeed: 1000,
                    autoWidth: false,
                    responsiveClass: true,
                    margin: 20,
                    items: 1,
                    center: true,
                    loop: false
                    //   responsive: {
                    //     1020: {
                    //       autoWidth: false,
                    //       responsiveClass: true,
                    //       margin: 35,
                    //       items: 3,
                    //       center: true,
                    //       loop: true,
                    //     },
                    //     1360: {
                    //       autoWidth: false,
                    //       responsiveClass: true,
                    //       items: 3,
                    //       center: true,
                    //       margin: 47,
                    //       loop: true,
                    //     },
                    //   },
                });
            }
        }
    });
}

export default partnersCarousel;
