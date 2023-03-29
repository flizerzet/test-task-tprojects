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

const settingsBtn = document.querySelectorAll('.settings__btn')

settingsBtn.forEach(btn => {
	btn.addEventListener('click', (event) => {
		let openId = event.target.closest(".settings__btn").dataset.open;
		btn.classList.toggle("_active");
		document.querySelector(`[data-settings="${openId}"]`).classList.toggle('_active');
	})
})

//#endregion

//#region Date

const dates = document.querySelectorAll('.date')

dates.forEach(date => {
	const day = date.querySelector('.day')
	const hour = date.querySelector('.hour')
	const minute = date.querySelector('.minute')

	if (day) {day.textContent = getDay("rus", "short")}
	if (hour) {hour.textContent = new Date().getHours() / 10 < 1 ? `0${new Date().getHours()}`: new Date().getHours();}
	if (minute) {minute.textContent = new Date().getMinutes() / 10 < 1 ? `0${new Date().getMinutes()}` : new Date().getMinutes();}
})

//#endregion

//#region Profile

const profileBtn = document.querySelector('.aside__avatar')
const profileMenu = document.querySelector('.profile-aside')

profileBtn.addEventListener('click', () => {
	profileMenu.classList.toggle('_active')
})

//#endregion

//#region Tasks

const tasksBtn = document.querySelector('[data-open="tasks"]')
const tasksMenu = document.querySelector(".projects-aside");
const asideBackdrop = document.querySelector(".aside__backdrop");
const closeTasksBtn = document.querySelector(".projects-aside__close");

const closeTasks = () => {
	asideBackdrop.classList.remove("_active");
	tasksMenu.classList.remove("_active");
}

closeTasksBtn.addEventListener('click', closeTasks)

asideBackdrop.addEventListener('click', closeTasks)

tasksBtn.addEventListener('click', () => {
	tasksMenu.classList.toggle('_active')
	asideBackdrop.classList.toggle("_active");
})

//#endregion

//#region Subheader
const subheaderMenu = document.querySelector(".submenu__tabs");
const subheaderBtn = document.querySelector(".submenu__title");

subheaderBtn.addEventListener('click', () => {
	subheaderMenu.classList.toggle('_active')
})

subheaderMenu.addEventListener("click", (e) => {
  if (e.target.closest(".submenu__tabs-item")) {
    subheaderMenu.querySelectorAll("li").forEach((item) => {
      item.classList.remove("_active");
      e.target.closest(".submenu__tabs-item").classList.add("_active");
			subheaderBtn.textContent = e.target.closest(".submenu__tabs-item").textContent
    });
  }
});
//#endregion