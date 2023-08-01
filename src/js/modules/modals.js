const modals = (modalSelector, triggerSelecror, closeSelector) => {

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';

    }

    function bindModal (triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
    
        trigger.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                openModal(modal);
                
            }); 
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        });
    
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
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
    showModalByTime('.popup', 60000);
};

export default modals;