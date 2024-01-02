import { SwiperInit } from './components/swiperinit.js';
import { Tabs } from './components/tabs.js';
import { Accordion } from './components/accordion.js';
import { Modal } from './components/modal.js';
import { Mask } from './components/mask.js';
import { Fixed } from './components/header-fixed.js';
import { Menu } from './components/menu.js';

const SwiperInstance = new SwiperInit();
const TabsInstance = new Tabs();
const AccordionInstance = new Accordion();
const ModalInstance = new Modal();
const MaskInstance = new Mask();
const FixedInstance = new Fixed();
const MenuInstance = new Menu();

function validateForm() {
    var emailInput = document.querySelector('.newsletter__form-input');
    var errorTxt = document.querySelector('.error-txt');

    if (!emailInput.value.trim()) {
        errorTxt.classList.add('active');
    } else {
        errorTxt.classList.remove('active');
        // Здесь вы можете добавить свой код для обработки формы
        console.log('Form validation successful');
    }
}


// export class Component1 {
//   // Ваш код здесь
// }