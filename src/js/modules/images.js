import calcScroll from "./calcScroll";


const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img'),
          scroll = calcScroll();


    imgPopup.classList.add('popup_img');
    imgPopup.classList.add('faded');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';


    imgPopup.appendChild(bigImage);
    bigImage.style.maxWidth = '80%';
    bigImage.style.maxHidth = '80%';


    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            imgPopup.classList.add('active');
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        if (target && target.matches('div.popup_img')) {
            imgPopup.style.display = 'none';
            imgPopup.classList.remove('active');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    });
};

export default images;