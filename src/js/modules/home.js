const home = (bool) => {
    const homeArea = document.getElementById('js-home');
    const playButton = document.getElementById('js-playButton');
    const homeAanimeImg = document.querySelector('#js-homeAnime > img');
    const playAnimePath = "/images/play.gif";

    if (bool == 'true') {
        homeAanimeImg.src = playAnimePath;
        homeArea.classList.add('is-fixed');
        playButton.classList.add('is-active');
        playButton.textContent = '占い中…';
    } else {
        homeArea.classList.remove('is-fixed');
        playButton.classList.remove('is-active');
        playButton.textContent = 'おみくじを引く';
    }
};
export default home;