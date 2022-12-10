const home = document.getElementById('js-home');
const modal = document.getElementById('js-modal');
const omikujiBlock = document.getElementById('js-omikuji');
const fortuneBlock = document.getElementById('js-fortune');
const kotowazaElem = document.getElementById('js-kotowaza');
const commentElem = document.getElementById('js-comment');
const imgElem = document.getElementById('js-kotowazaImg');

export const replay = async () => {
    await new Promise((resolve, reject) => {
        // オーバーレイをフェードアウト
        modal.classList.remove('is-show');
        
        setTimeout(() => {
            resolve();
        }, 1000);
    }).then(() => {
        // ホーム画面のポインターアクション停止解除
        home.classList.remove('is-hide');

        // おみくじをリセット
        while (fortuneBlock.firstChild) {
            fortuneBlock.removeChild(fortuneBlock.firstChild);
        }

        kotowazaElem.textContent = '';
        commentElem.innerHTML = '';
        imgElem.src = '';
        imgElem.alt = '';

        // 結果を非表示
        omikujiBlock.classList.remove('is-show');
        kotowazaElem.classList.remove('is-show');
        commentElem.classList.remove('is-show');
        imgElem.classList.remove('is-show');

        // スクロール位置をトップに戻す
        modal.scrollTop = 0;
    });
}