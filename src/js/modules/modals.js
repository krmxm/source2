import calcScroll from "./calcScroll";

const modals = (state) => {

    const scroll = calcScroll();

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }

    function closeModal (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;


    }

    function bindModal (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]');
    
        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if(modal.classList.contains('popup_calc_profile')) {
                    if(!state.form || !state.width || !state.height) {
                        e.removeEventListener();
                    }
                }

                if(modal.classList.contains('popup_calc_end')) {
                    if(!state.type || !state.profile) {
                        e.removeEventListener();
                    }
                }

                windows.forEach(item => {
                    closeModal(item);
                });
    
                openModal(modal);
                
            }); 
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                closeModal(item);
            });
            closeModal(modal);
        });
    
        modal.addEventListener('click', (e) => {
            if(e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    closeModal(item);
                });
                closeModal(modal);
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).classList.add('active');
            document.body.style.overflow = 'hidden';
        }, time);
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);

    // showModalByTime('.popup', 60000);
};

export default modals;