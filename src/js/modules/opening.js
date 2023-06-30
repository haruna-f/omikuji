const opening = () => {
    const openingAnime = document.getElementById('js-homeAnime');
    const imgElement = document.createElement('img');
    const primaryImgPath = "/images/opening.gif";
    
    const setImg = () => {
        imgElement.src = primaryImgPath;
        imgElement.alt = 'おみくじを引く';
        imgElement.style.width = '100%';
        imgElement.style.height = '100%';
        openingAnime.appendChild(imgElement);
    };

    document.addEventListener('DOMContentLoaded', setImg());
};

export default opening;