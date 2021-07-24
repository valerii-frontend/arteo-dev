// SCROLL ANIMATION
let scrollBlocks = document.querySelectorAll("._anim");
for (let index = 0; index < scrollBlocks.length; index++) {
	const scrollBlock = scrollBlocks[index];
	const scrollBlockTop = scrollBlock.getBoundingClientRect().top;
	if (scrollBlocks.length > 0) {
		window.addEventListener("scroll", function (e) {
			if (scrollBlock.getBoundingClientRect().top < 600) {
				scrollBlock.classList.remove("_scroll");
			} else {
				scrollBlock.classList.add("_scroll");
			}
		});
	}
}
