const content = document.querySelector(".steps_section");
function slideToScreen(content) {
  content.classList.add("slide_to_right");
}
window.addEventListener("scroll", () => {
  const contentViewed = content.getBoundingClientRect().top;
  if (contentViewed < window.innerHeight) {
    slideToScreen(content);
  }
});
const text = "Prospecção de verdade\!\nAqui acontece!";
let index = 0;
function writeContent(text) {
  const elementText = document.querySelector(".h1_hero");
  const interval = setInterval(() => {
    elementText.textContent += text[index];
    index++;
    if (index >= text.length) {
      clearInterval(interval);
    }
  }, 80);
}
writeContent(text);
addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 90) {
    header.classList.add("sticky_header");
  } else {
    header.classList.remove("sticky_header");
  }
});
function growBar() {
    const bar = document.querySelector(".bar");
        function updateBar() {
            const scrollY = window.scrollY;
            const pageHeight =
            document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollY / pageHeight) * 100;
            bar.style.width = `${progress}%`;
    }
    window.addEventListener("scroll", updateBar);
    updateBar();
}
growBar();