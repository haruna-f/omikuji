import { playOmikuji } from "./play-omikuji.mjs";

const playButton = document.querySelector('.js-playButton');

playButton.addEventListener('click', function () { 
    playOmikuji();
});