export const setScreenHight = () => {
    const screenHight = window.innerHeight;
    const modal = document.getElementById('js-modal');
    const home = document.getElementById('js-home');

    modal.style.height = `${screenHight}px`;
    home.style.height = `${screenHight}px`;
}