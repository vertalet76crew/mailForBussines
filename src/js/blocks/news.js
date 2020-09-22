import $ from 'jquery';
import 'owl.carousel';

function newsCarousel() {
    let offsetLeft;
    function computedPosition() {
        const $faqWrap = $(".faq_wrap")
        const positionStyle = (style) => parseInt($faqWrap.css(style))
        const rect = {
            width: $faqWrap.width(),
            height: $faqWrap.height(),
            paddingLeft: positionStyle("padding-left"),
            paddingRight: positionStyle("padding-right"),
            marginRight: positionStyle("margin-right"),
            marginLeft: positionStyle("margin-left"),
            // resulPosition: rect.width + rect.marginRight + rect.marginLeft
        }
        const resulPosition = rect.width + rect.marginLeft - rect.paddingRight - rect.marginRight

        offsetLeft = $faqWrap.offset().left + rect.paddingRight - 20

    }
    const $slider = $('[data-carousel="news"]');
    $(window).on("resize", computedPosition)
    $(window).on("load", computedPosition)

    if ($slider.length) {
        $slider.owlCarousel({
            nav: false,
            dots: false,
            loop: false,
            autoWidth: true,
            responsiveClass: true,
            margin: 0,
            items: 1,
            smartSpeed: 700,
            stagePadding: 20,
        });
    }
}

export default newsCarousel;
