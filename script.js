// Typing effect
const texts = ['a Developer', 'an Android Engineer', 'a Problem Solver'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.getElementById('typing').textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 2000); // Wait before typing next
  } else {
    setTimeout(type, 150); // Typing speed
  }
})();

// ☝️ Scroll to top button visibility
window.onscroll = function () {
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    topBtn.style.display = window.scrollY > 200 ? "block" : "none";
  }
};

// ☝️ Scroll to top action
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// 🌗 Theme toggle
document.getElementById("theme-toggle").onclick = function () {
  document.body.classList.toggle("light-theme");
};
