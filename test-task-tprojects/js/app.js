(() => {
    "use strict";
    document.body;
    (function() {
        let currentBrowser;
        if (navigator.userAgent.indexOf("Firefox") > -1) currentBrowser = "firefox"; else if (navigator.userAgent.indexOf("Opera") > -1) currentBrowser = "opera"; else if (navigator.userAgent.indexOf("Trident") > -1) currentBrowser = "explorer"; else if (navigator.userAgent.indexOf("Edge") > -1) currentBrowser = "edge"; else if (navigator.userAgent.indexOf("Chrome") > -1) currentBrowser = "chrome"; else if (navigator.userAgent.indexOf("Safari") > -1) currentBrowser = "safari"; else currentBrowser = "unknown";
        console.log("You are using: " + currentBrowser);
        document.documentElement.classList.add(currentBrowser);
    })();
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };
    (function checkMobile() {
        if (isMobile.any()) document.documentElement.classList.add("_mobile");
    })();
    (function isWebp() {
        function testWebP(callback) {
            var webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            if (true === support) document.documentElement.classList.add("_webp"); else document.documentElement.classList.add("_no-webp");
        }));
    })();
    function tabsInit() {
        let tabs = document.querySelectorAll("._tabs");
        for (let index = 0; index < tabs.length; index++) {
            let tab = tabs[index];
            let tabs_items = tab.querySelectorAll("._tabs-link");
            let tabs_blocks = tab.querySelectorAll("._tabs-content");
            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.addEventListener("click", (function(e) {
                    for (let index = 0; index < tabs_items.length; index++) {
                        let tabs_item = tabs_items[index];
                        tabs_item.classList.remove("_active");
                        tabs_blocks[index].classList.remove("_active");
                    }
                    tabs_item.classList.add("_active");
                    tabs_blocks[index].classList.add("_active");
                    e.preventDefault();
                }));
            }
        }
    }
    const getDay = (lang = "eng", format = "full") => {
        let day;
        if ("full" === format) if ("rus" === lang) {
            const days = [ "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье" ];
            day = days[(new Date).getDay() - 1];
        } else {
            const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
            day = days[(new Date).getDay()];
        } else if ("rus" === lang) {
            const days = [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ];
            day = days[(new Date).getDay() - 1];
        } else {
            const days = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
            day = days[(new Date).getDay()];
        }
        return day;
    };
    const headerMenu = document.querySelector(".menu");
    headerMenu.addEventListener("click", (e => {
        if (e.target.closest(".menu__item")) headerMenu.querySelectorAll("li").forEach((item => {
            item.classList.remove("_active");
            e.target.closest(".menu__item").classList.add("_active");
        }));
    }));
    const settingsBtn = document.querySelector(".settings__btn");
    const settingsMenu = document.querySelector(".settings__menu");
    settingsBtn.addEventListener("click", (() => {
        settingsBtn.classList.toggle("_active");
        settingsMenu.classList.toggle("_active");
    }));
    const dates = document.querySelectorAll(".date");
    dates.forEach((date => {
        const day = date.querySelector(".day");
        const hour = date.querySelector(".hour");
        const minute = date.querySelector(".minute");
        if (day) day.textContent = getDay("rus", "short");
        if (hour) hour.textContent = (new Date).getHours() / 10 < 1 ? `0${(new Date).getHours()}` : (new Date).getHours();
        if (minute) minute.textContent = (new Date).getMinutes() / 10 < 1 ? `0${(new Date).getMinutes()}` : (new Date).getMinutes();
    }));
    const profileBtn = document.querySelector(".aside__avatar");
    const profileMenu = document.querySelector(".profile-aside");
    profileBtn.addEventListener("click", (() => {
        profileMenu.classList.toggle("_active");
    }));
    const tasksBtn = document.querySelector('[data-open="tasks"]');
    const tasksMenu = document.querySelector(".projects-aside");
    const asideBackdrop = document.querySelector(".aside__backdrop");
    const closeTasksBtn = document.querySelector(".projects-aside__close");
    const closeTasks = () => {
        asideBackdrop.classList.remove("_active");
        tasksMenu.classList.remove("_active");
    };
    closeTasksBtn.addEventListener("click", closeTasks);
    asideBackdrop.addEventListener("click", closeTasks);
    tasksBtn.addEventListener("click", (() => {
        tasksMenu.classList.toggle("_active");
        asideBackdrop.classList.toggle("_active");
    }));
    tabsInit();
})();