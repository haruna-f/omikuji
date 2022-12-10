import { kotowazaArray } from "./kotowaza.js";
import { fortunes } from "./fortunes.js";
import { Fortune, Kotowaza } from "./omikuji.js"

export class Button {
    constructor() {
    this.home = document.getElementById('js-home');
    this.playAnime = document.getElementById('js-anime');
    this.modal = document.getElementById('js-modal');
    this.omikujiBlock = document.getElementById('js-omikuji');
    this.fortuneBlock = document.getElementById('js-fortune');    
    this.kotowazaElem = document.getElementById('js-kotowaza');
    this.commentElem = document.getElementById('js-comment');
    this.imgElem = document.getElementById('js-kotowazaImg');
    }

    async play() {
        // ホーム画面のポインターアクション停止
        // this.home.classList.add('is-hide');
        // ボタンクリックでアニメを再生
        this.playAnime.src = '/images/omikuji.gif';
        
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
            this.modal.classList.add('is-show');

            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 600);
            })
        }).then(async () => {
            // おみくじ（枠）を表示
            this.omikujiBlock.classList.add('is-show');

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
            this.kotowazaElem.classList.add('is-show');
            this.commentElem.classList.add('is-show');
            this.imgElem.classList.add('is-show');
        });
    }

    async replay() {

    }
}