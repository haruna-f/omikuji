import { kotowazas } from "./kotowaza.mjs";

export function setResult() {
    const fortunes = ["大吉", "吉", "中吉", "小吉", "末吉"];
    const fortuneNum = Math.floor(Math.random() * fortunes.length);
    const kotowazaNum = Math.floor(Math.random() * kotowazas.length);
    const fortune = document.querySelector('.js-fortune');
    const title = document.querySelector('.js-kotowazaTitle');
    const description = document.querySelector('.js-kotowazaDescription');
    const img = document.querySelector('.js-kotowazaImg');
    
    fortune.textContent = fortunes[fortuneNum];
    title.textContent = kotowazas[kotowazaNum].kotowaza;
    description.textContent = kotowazas[kotowazaNum].description;
    img.src = kotowazas[kotowazaNum].imgUrl;
    img.alt = kotowazas[kotowazaNum].kotowaza;
}