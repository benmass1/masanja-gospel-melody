function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* Scroll animation */
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});
