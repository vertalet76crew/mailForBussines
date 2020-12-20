import 'polyfill-array-includes';
import 'element-closest-polyfill';
import $ from 'jquery';

import menu from './blocks/menu';
import formRequest from './blocks/form-request';
import newsCarousel from './blocks/news';
import faq from './blocks/faq';
import partnersCarousel from './blocks/partners';
import formSubscription from './blocks/form-subscription';

$(function() {
    const patternUserAgent = /iPhone|iPod|iPad|iOS|android/i;
    const isMobile = !!navigator.userAgent.match(patternUserAgent);

    menu(isMobile);
    formRequest(isMobile);
    newsCarousel();
    faq();
    partnersCarousel();
    formSubscription();
});
