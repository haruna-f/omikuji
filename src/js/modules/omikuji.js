import { proverbs } from "./proverbs";
import { fortunes } from "./fortunes";

const omikuji = (bool) => {
    const omikujiArea = document.getElementById('js-omikuji');

    if (bool == 'true') {
        // おみくじセット
        const ANIME_DURATION = 6000;
        const fortuneRandomNum = Math.floor(Math.random() * fortunes.length);
        const proverbRandomNum = Math.floor(Math.random() * proverbs.length);
        let fortune = '';
        const fortuneStrs = fortunes[fortuneRandomNum].split('');
        const proverb = proverbs[proverbRandomNum];
        const proverbHeading = proverb.heading;
        const proverbText = proverb.text;
        const proverbImage = proverb.image;

        fortuneStrs.forEach((str) => {
            fortune += `<span class="js-fortuneStr">${str}</span>`;
        });
        omikujiArea.appendChild(document.createElement('h1')).innerHTML = fortune;
        omikujiArea.appendChild(document.createElement('h2')).innerHTML = proverbHeading;
        omikujiArea.appendChild(document.createElement('p')).innerHTML = proverbText;
        omikujiArea.appendChild(document.createElement('img')).src = `/images/proverbs/${proverbImage}`;
    } else {
        // おみくじリセット
        while (omikujiArea.firstChild) {
            omikujiArea.removeChild(omikujiArea.firstChild);
        };
    }
}
export default omikuji;