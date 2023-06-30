import { proverbs } from "./proverbs";
import { fortunes } from "./fortunes";

const omikuji = () => {
    const omikuji = document.getElementById('js-omikuji');
    const buttons = document.querySelectorAll('.js-button');

    const setResult = (bool) => {

        if (bool == 'true') {
            const homeAanime = document.querySelector('#js-homeAnime > img');
            const playAnimePath = "/images/play.gif";
            const ANIME_DURATION = 6000;
            const fortuneRandomNum = Math.floor(Math.random() * fortunes.length);
            const proverbRandomNum = Math.floor(Math.random() * proverbs.length);
            let fortune = '';
            const fortuneStrs = fortunes[fortuneRandomNum].split('');
            const proverb = proverbs[proverbRandomNum];
            const proverbHeading = proverb.heading;
            const proverbText = proverb.text;
            const proverbImage = proverb.image;

            homeAanime.src = playAnimePath;
            fortuneStrs.forEach((str) => {
                fortune += `<span class="js-fortuneStr">${str}</span>`;
            });
            omikuji.appendChild(document.createElement('h1')).innerHTML = fortune;
            omikuji.appendChild(document.createElement('h2')).innerHTML = proverbHeading;
            omikuji.appendChild(document.createElement('p')).innerHTML = proverbText;
            omikuji.appendChild(document.createElement('img')).src = `/images/proverbs/${proverbImage}`;

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, ANIME_DURATION);
            });
        } else {
            omikuji.classList.remove('is-show');
            while (omikuji.firstChild) {
                omikuji.removeChild(omikuji.firstChild);
            };
        }
    }

    const modalState = (bool) => {
        const modal = document.getElementById('js-modal');
        const CLASS = 'is-active';

        modal.setAttribute('aria-hidden', !bool);
        buttons.forEach((button) => {
            button.setAttribute('aria-expanded', bool);
        });

        if (bool == 'true') {
            modal.classList.add(CLASS);
        } else {
            modal.classList.remove(CLASS);
        }
    };

    const homeState = (bool) => {
        const home = document.getElementById('js-home');
        const playButton = document.getElementById('js-playButton');

        if (bool == 'true') {
            home.classList.add('is-fixed');
            playButton.classList.add('is-active');
            playButton.textContent = '占い中…';
        } else {
            home.classList.remove('is-fixed');
            playButton.classList.remove('is-active');
            playButton.textContent = 'おみくじを引く';
        }
    }

    const play = (flg) => {
        return new Promise((resolve) => {
            homeState(flg);
            setResult(flg);
            setTimeout(() => {
                resolve();
            }, 6000);
        })
    };
    
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let type = e.target.getAttribute('data-button');
            let flg = "";
            const TIMER = 800;

            if (type == 'play') {
                flg = 'true';

                play(flg).then(() => {
                    modalState(flg);
                    setTimeout(() => {
                        omikuji.classList.add('is-show');
                    }, TIMER);
                });
            } else {
                flg = 'false';

                homeState(flg);
                modalState(flg);
                setTimeout(() => {
                    setResult(flg)
                }, TIMER + 200);
            }
        });
    });
};
export default omikuji;