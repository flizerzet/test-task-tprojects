import { throttle, debounce, getDay, getMonth, getRandom } from "./functions.js";
import { Modal } from "./modules.js";

//#region Menu
const headerMenu = document.querySelector('.menu')

headerMenu.addEventListener('click', e => {
	if (e.target.closest('.menu__item')) {
		headerMenu.querySelectorAll('li').forEach(item => {
			item.classList.remove('_active')
			e.target.closest('.menu__item').classList.add('_active')
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

//#region Date

const dates = document.querySelectorAll('.date')

dates.forEach(date => {
	const day = date.querySelector('.day')
	const hour = date.querySelector('.hour')
	const minute = date.querySelector('.minute')

	day.textContent = getDay('rus', 'short')
	hour.textContent = new Date().getHours() / 10 < 1 ? `0${new Date().getHours()}` : new Date().getHours()
	minute.textContent = new Date().getMinutes() / 10 < 1 ? `0${new Date().getMinutes()}` : new Date().getMinutes()
})

//#endregion

//#region Profile

const profileBtn = document.querySelector('.aside__avatar')
const profileMenu = document.querySelector('.profile-aside')

profileBtn.addEventListener('click', () => {
	profileMenu.classList.toggle('_active')
})

//#endregion