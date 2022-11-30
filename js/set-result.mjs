import { kotowazaArray } from "./kotowaza.mjs";

export function setResult() {
    let fortunes = ["大吉", "吉", "中吉", "小吉", "末吉"];
    let fortuneNum = Math.floor(Math.random() * fortunes.length);
    let kotowazaNum = Math.floor(Math.random() * kotowazaArray.length);
    let fortune = fortunes[fortuneNum];
    let spanWrapFortune = "";

    for (let i = 0; i < fortune.length; i++) {
        let splitText = fortune.charAt(i);
        spanWrapFortune += "<span>" + splitText + "</span>";
    }
    
    document.querySelector('.js-fortune').innerHTML = spanWrapFortune;
    document.querySelector('.js-kotowaza').textContent = kotowazaArray[kotowazaNum].kotowaza;
    document.querySelector('.js-kotowazaDescription').textContent = kotowazaArray[kotowazaNum].description;
    document.querySelector('.js-kotowazaImg').src = "/images/kotowaza/" + kotowazaArray[kotowazaNum].imgUrl;
    document.querySelector('.js-kotowazaImg').alt = kotowazaArray[kotowazaNum].kotowaza;
}
