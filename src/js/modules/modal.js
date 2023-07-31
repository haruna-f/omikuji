const modal = (bool) => {
    const modalArea = document.getElementById('js-modal');
    const omikujiArea = document.getElementById('js-omikuji');
    const MODAL_CLASS = 'is-active';
    const OMIKUJI_CLASS = 'is-show';
    const TIMER = 800;

    if (bool == 'true') {
        // モーダル表示
        modalArea.setAttribute('aria-hidden', !bool);
        modalArea.classList.add(MODAL_CLASS);
        setTimeout(() => {
            omikujiArea.classList.add(OMIKUJI_CLASS);
        }, TIMER);
    } else {
        // モーダル非表示
        modalArea.setAttribute('aria-hidden', bool);
        modalArea.classList.remove(MODAL_CLASS);
        setTimeout(() => {
            omikujiArea.classList.remove(OMIKUJI_CLASS);
        }, TIMER);
    }
};
export default modal;

