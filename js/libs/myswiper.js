const swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
	},
	breakpoints: {
		450: {
			slidesPerView: 2,
			loop: true,
		},
		780: {
			slidesPerView: 3,
			loop: true,
		},
		1400: {
			slidesPerView: 4,
			loop: true,
		},
	},
});
