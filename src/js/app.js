import $ from 'jquery';
import menu from './blocks/menu';
import formSubscription from './blocks/form-subscription';
import formRequest from './blocks/form-request';
import newsCarousel from './blocks/news';

$(function() {
    const patternUserAgent = /iPhone|iPod|iPad|iOS|android/i;
    const isMobile = !!(navigator.userAgent.match(patternUserAgent));

    menu(isMobile);
    formSubscription();
    formRequest(isMobile);
    newsCarousel();
});
