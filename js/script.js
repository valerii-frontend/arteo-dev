// #BURGER MENU EVENTS
// @@VARS
const body = document.querySelector("body");
const burger = document.querySelector(".header__toogle");
const navMenu = document.querySelector(".menu");
const fixedLinks = document.querySelector(".fixed");
const navMenuLinks = document.querySelectorAll(".menu__list > li > a");
const menuBg = document.querySelector(".header__menu");
// @@EVENTS
burger.addEventListener("click", function (e) {
	const burgerActive = document.querySelector(".header__toogle_active");
	if (burgerActive) {
		burger.classList.remove("header__toogle_active");
		navMenu.classList.remove("menu_active");
		menuBg.classList.remove("header__menu_active");
		body.classList.remove("_lock");
		fixedLinks.classList.remove("_hide");
	} else {
		burger.classList.add("header__toogle_active");
		navMenu.classList.add("menu_active");
		menuBg.classList.add("header__menu_active");
		body.classList.add("_lock");
		fixedLinks.classList.add("_hide");
	}
});
navMenuLinks.forEach((menuLink) => {
	menuLink.addEventListener("click", function (e) {
		if (e.target == menuLink) {
			burger.classList.remove("header__toogle_active");
			navMenu.classList.remove("menu_active");
			menuBg.classList.remove("header__menu_active");
			body.classList.remove("_lock");
			fixedLinks.classList.remove("_hide");
		}
	});
});

// #PRELOADER

const wrapper = document.querySelector(".wrapper");
wrapper.classList.add("wrapper_load");

// #SWIPER

const swiper = new Swiper(".home-main__slider", {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".home-main__next",
		prevEl: ".home-main__prev",
	},

	// And if we need scrollbar
	scrollbar: {
		el: ".swiper-scrollbar",
	},
});
// #DATA ATTRIBUTES AND ELEMENTS FOR FILTERS
let areas = document.querySelectorAll("[data-area]");
let rooms = document.querySelectorAll("[data-rooms]");
let floors = document.querySelectorAll("[data-floor]");
let flatArea = document.getElementById("area-filter");
let flatFloor = document.getElementById("floor-filter");
let areaMax = document.getElementById("area-min");
let areaMin = document.getElementById("area-max");
let areaInpt = [areaMin, areaMax];
let flMax = document.getElementById("floor-min");
let flMin = document.getElementById("floor-max");
let flInpt = [flMin, flMax];
let optionsBtns = document.querySelectorAll("input[name^='option']");
let radioBoxes = document.querySelectorAll(".filter__radio");
let clearBtn = document.querySelector(".filter__clear");
if (flatArea) {
	// @@AREA FILTER
	noUiSlider.create(flatArea, {
		start: [28, 105],
		step: 1,
		margin: 5,
		range: {
			"min": [28],
			"max": [105],
		},
		format: {
			to: function (value) {
				return value.toFixed(0);
			},
			// 'from' the formatted value.
			// Receives a string, should return a number.
			from: function (value) {
				return Number(value.replace(",-", ""));
			},
		},
	});
	// @@UPDATE
	flatArea.noUiSlider.on("update", function (values, handle) {
		areaInpt[handle].value = values[handle];
		areas.forEach((area) => {
			let areaM2 = area.getAttribute("data-area");
			if (areaInpt[0].value <= areaM2 && areaM2 <= areaInpt[1].value) {
				area.classList.remove("_hide");
			} else {
				area.classList.add("_hide");
			}
		});
		areaInpt.forEach(function (input, handle) {
			input.addEventListener("change", function () {
				flatArea.noUiSlider.setHandle(handle, this.value);
			});
		});
	});

	// @@FLOOR FILTER
	noUiSlider.create(flatFloor, {
		start: [1, 5],
		step: 1,
		margin: 1,
		range: {
			"min": [1],
			"max": [5],
		},
		format: {
			to: function (value) {
				return value.toFixed(0);
			},
			// 'from' the formatted value.
			// Receives a string, should return a number.
			from: function (value) {
				return Number(value.replace(",-", ""));
			},
		},
	});
	// @@UPDATE
	flatFloor.noUiSlider.on("update", function (values, handle) {
		flInpt[handle].value = values[handle];
		floors.forEach((floor) => {
			let floorNumb = floor.getAttribute("data-floor");
			if (flInpt[0].value <= floorNumb && floorNumb <= flInpt[1].value) {
				floor.classList.remove("_hide");
			} else {
				floor.classList.add("_hide");
			}
		});
		flInpt.forEach(function (input, handle) {
			input.addEventListener("change", function () {
				flatFloor.noUiSlider.setHandle(handle, this.value);
			});
		});
	});
	// @FILTER RADIO

	if (radioBoxes.length > 0) {
		radioBoxes.forEach((radio) => {
			let count = radio.getAttribute("data-value");
			radio.addEventListener("change", function (e) {
				rooms.forEach((room) => {
					let roomNumb = room.getAttribute("data-rooms");
					if (count != roomNumb) {
						room.classList.add("_hide");
					} else {
						room.classList.remove("_hide");
					}
				});
			});
		});
	}

	//@@ FILTER OPTIONS

	optionsBtns.forEach((optBtn) => {
		optBtn.addEventListener("change", function (e) {
			let optAttr = optBtn.getAttribute("name").slice(-1);

			let options = document.querySelectorAll("[data-options]");
			options.forEach((opt) => {
				let colAttr = opt.getAttribute("data-options");
				if (colAttr.includes(optAttr)) {
					opt.classList.remove("_hide");
				} else {
					opt.classList.add("_hide");
				}
			});
		});
	});
	// @@CLEAR BTN

	clearBtn.addEventListener("click", function (e) {
		window.location.reload();
		// let allClear = document.querySelectorAll("input");
		// allClear.forEach((element) => {
		// 	element.checked = false;
		// });
		// flatFloor.noUiSlider.reset();
		// flatArea.noUiSlider.reset();
	});
}
