import checkNumInputs from './checkNumInputs'; 

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');


    checkNumInputs('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Скоро мы с вами свяжемся!',
        failure: 'Ошибка'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };
 
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    const clearState = () => {
        state = {
            form: 1,
            type: "tree"
        };
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === 'end'){
                for(let key in state) {
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    clearState();
                    // Object.keys(state).forEach(key => delete state[key]); //!!!
                    setTimeout(() => {
                        statusMessage.remove();
                        document.querySelectorAll('[data-modal]').forEach(item => {
                            item.classList.remove('active');
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        });
                    }, 5000);
                });
        });
    });
};

export default forms;