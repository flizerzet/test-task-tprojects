import { throttle, debounce, getDay, getMonth, getRandom } from "./functions.js";
import { Modal } from "./modules.js";

//#region Menu
const headerMenu = document.querySelector('.menu')

headerMenu.addEventListener('click', e => {
	if (e.target.closest('.menu__item')) {
		headerMenu.querySelectorAll('li').forEach(item => {
			if (item.classList.contains('_active')) {
				// return
				item.closest('.menu__item').classList.remove('_active')
			} else {
				e.target.closest('.menu__item').classList.add('_active')
			}
		})
	}
})
//#endregion

//#region Settings

const settingsBtn = document.querySelector('.settings__btn')
const settingsMenu = document.querySelector('.settings__menu')

settingsBtn.addEventListener('click', () => {
	settingsBtn.classList.toggle('_active')
	settingsMenu.classList.toggle('_active')
})

//#endregion