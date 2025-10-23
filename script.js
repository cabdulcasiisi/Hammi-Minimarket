// ===== Sticky Navigation on Scroll =====
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ===== Scroll to Top Button =====
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top-btn");
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// ===== Contact Form Alert =====
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon 😊");
    contactForm.reset();
  });
}


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});