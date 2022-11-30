import { setResult } from "./set-result.mjs";

export function playOmikuji() {
    document.querySelector('.js-omikujiImg').src = '/images/omikuji.gif';
    setResult();

    setTimeout(() => {
        document.querySelector('.js-overlay').classList.add('is-show');
    }, 7000);
}

// overlay.classList.add('is-show');