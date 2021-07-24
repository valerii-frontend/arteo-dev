// header-scroll-gb-change
let header = document.querySelector(".header");
function headerScroll() {
	console.log(pageYOffset);
	if (header) {
		if (pageYOffset > 255) {
			header.style.backgroundColor = "rgb(0,0,0)";
		} else {
			header.style.backgroundColor = `rgba(0,0,0, ${(0.1 * pageYOffset) / 25.5})`;
		}
	}
}
window.addEventListener("scroll", headerScroll);

// goto smooth

let sectionLinks = document.querySelectorAll('a[href*="#"]');
for (let index = 0; index < sectionLinks.length; index++) {
	const sectionLink = sectionLinks[index];
	sectionLink.addEventListener("click", function (e) {
		e.preventDefault();
		const blockId = sectionLink.getAttribute("href");
		const block = document.querySelector("" + blockId);
		let header = document.querySelector(".header");
		window.scrollTo({
			top: `${block.offsetTop - header.offsetHeight}`,
			behavior: "smooth",
		});
	});
}
