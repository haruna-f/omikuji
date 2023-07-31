import home from "./home";
import modal from "./modal";
import omikuji from "./omikuji";

const playOmikuji = () => {
    const buttons = document.querySelectorAll('.js-button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            let type = e.target.getAttribute('data-button');
            let flg = '';
            const TIMER = 6000;

            if (type == 'play') {
                flg = 'true';

                return new Promise((resolve) => {
                    home(flg);
                    omikuji(flg);
                    setTimeout(() => {
                        resolve();
                    }, TIMER);
                }).then(() => {
                    modal(flg);
                });

            } else {
                flg = 'false';
                
                home(flg);
                modal(flg);
                setTimeout(() => {
                    omikuji(flg);
                }, 1000);
            }
        });
    });

};
export default playOmikuji;