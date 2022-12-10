import { kotowazaArray } from "./kotowaza.js";
import { fortunes } from "./fortunes.js";
import { Fortune, Kotowaza } from "./omikuji.js"

const home = document.getElementById('js-home');
const playAnime = document.getElementById('js-anime');
const modal = document.getElementById('js-modal');
const omikujiBlock = document.getElementById('js-omikuji');
const kotowazaElem = document.getElementById('js-kotowaza');
const commentElem = document.getElementById('js-comment');
const imgElem = document.getElementById('js-kotowazaImg');

export const play = async () => {
    // ホーム画面のポインターアクション停止
    home.classList.add('is-hide');
    // ボタンクリックでアニメを再生
    playAnime.src = './images/play.gif';
    
    await new Promise((resolve, reject) => {
        // おみくじを実行、結果をセット
        const myFortune = new Fortune(fortunes);
        const myKotowaza = new Kotowaza(kotowazaArray);

        myFortune.set();
        myKotowaza.set();
        
        setTimeout(() => {
            resolve();
        }, 6000);
    }).then(async () => {
        // オーバーレイをフェードイン
        modal.classList.add('is-show');
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 600);
        })
    }).then(async () => {
        // おみくじ（枠）を表示
        omikujiBlock.classList.add('is-show');
        // 運勢を1文字ずつ表示
        let fortuneElems = document.querySelectorAll('#js-fortune span');
        let delay = 200;

        for (let i = 0; i < fortuneElems.length; i++) {
            let elem = fortuneElems[i];

            setTimeout(() => {
                elem.classList.add('is-show');
            }, delay);

            delay += 200;
        }

        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 600);
        })
    }).then(() => {
        // ことわざを表示
        kotowazaElem.classList.add('is-show');
        commentElem.classList.add('is-show');
        imgElem.classList.add('is-show');
    });
}