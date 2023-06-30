const mainLayout = () => {
    const mainArea = document.getElementById('js-main');

    const setHeight = () => {
        const windowHeight = window.innerHeight;

        mainArea.style.height = windowHeight + 'px';
    };

    document.addEventListener('DOMContentLoaded', setHeight());
    window.addEventListener('resize', ()=>{setHeight()});
};
export default mainLayout;