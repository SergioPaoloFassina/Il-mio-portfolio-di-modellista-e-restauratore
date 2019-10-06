var intro = document.querySelector('.banner-bg');
var introPlayer = document.querySelector('.banner-video');

if (/iPad|iPhone|iPod/.test(navigator.platform)) {
    intro.style.backgroundImage = 'url("' + introPlayer.poster + '")';
    introPlayer.style.display = 'none';
}