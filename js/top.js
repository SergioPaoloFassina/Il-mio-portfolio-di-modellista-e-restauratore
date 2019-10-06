(function ($) {
    "use strict";

    var intro = $('.banner-bg');
    var introPlayer = $('.banner-video');

    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
        intro.style.backgroundImage = 'url("' + introPlayer.poster + '")';
        introPlayer.style.display = 'none';
    }
})(jQuery);
