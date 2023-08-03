import checkNumInputs from './checkNumInputs';


const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelector('#width'),
          windowHieght = document.querySelector('#hieght'),
          windowType = document.querySelector('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#hieght');

    function bindActionToElems(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                state[prop] = i;
                console.log(state);
            });
        });
    }
    bindActionToElems('click', windowForm, 'form');
};

export default changeModalState;