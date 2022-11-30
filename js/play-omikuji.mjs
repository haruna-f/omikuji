import { setResult } from "./set-result.mjs";

const omikujiImg = document.querySelector('.js-omikujiImg'); 
const overlay = document.querySelector('.js-overlay');

export function playOmikuji() {
    omikujiImg.src = '/images/omikuji.gif';
    setResult();
}

// overlay.classList.add('is-show');