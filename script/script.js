const text = "A Manhattan Pro Sales gera conversas qualificadas e leads prontos para o seu time comercial por meio de prospecção ativa via WhatsApp. Operação humana, segmentada e focada em empresários e decisores que realmente importam.";
function writeText(text) {
	const element = document.querySelector(".banner_p");
	element.textContent = "";
	let i = 0;
	const interval = setInterval(() => {
		if (i < text.length) {
			element.textContent += text.charAt(i);
			i++;
		} else {
			clearInterval(interval);
		}
	}, 40);
}
writeText(text);
const header = document.querySelector(".header");
function stickyHeader(header) {
	window.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	});
}
stickyHeader(header);
function moveGradient() {
	const footer = document.querySelector(".footer");
	let angle = 0;
	setInterval(() => {
		angle = (angle + 1) % 360; // reinicia automaticamente
		footer.style.background = `linear-gradient(${angle}deg, #131E2A 0%, #000000 100%)`;
	}, 10);
};
moveGradient();
function toggleButtonColor() {
	const button = document.querySelector(".button");
	let active = false;
	setInterval(() => {
		button.classList.toggle("active_button_color", active);
		active = !active;
	}, 1000);
};
toggleButtonColor();