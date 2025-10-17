window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

document.getElementById("start-btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("destinations").scrollIntoView({
    behavior: "smooth",
  });
});

const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "PM" : "AM";
});

const fadeElements = document.querySelectorAll(
  ".about__image, .about__content"
);

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.3 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));
// ===== PAGINATION cho Điểm đến =====
const destinationsPerPage = 8;
const destinations = Array.from(document.querySelectorAll(".destination-card"));
const paginationContainer = document.getElementById("pagination");

function renderPage(page) {
  const start = (page - 1) * destinationsPerPage;
  const end = start + destinationsPerPage;

  destinations.forEach((card, index) => {
    card.style.display = index >= start && index < end ? "block" : "none";
  });

  document.querySelectorAll(".pagination button").forEach((btn, idx) => {
    btn.classList.toggle("active", idx + 1 === page);
  });
}

function setupPagination() {
  const pageCount = Math.ceil(destinations.length / destinationsPerPage);

  paginationContainer.innerHTML = "";
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => renderPage(i));
    paginationContainer.appendChild(btn);
  }

  renderPage(1);
}

setupPagination();
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
// giới hạn cuộn
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
let currentSlide = 0;
const slides = document.querySelectorAll(".hero__slide");

function showNextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, 3000);
