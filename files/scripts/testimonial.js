import testimonialsData from "./testimonialsData.js";

const container = document.querySelector(".testimonial-container");
const dotsContainer = document.querySelector(".testimonial-dots");
const prevBtn = document.querySelector(".testimonial-nav.prev");
const nextBtn = document.querySelector(".testimonial-nav.next");

let currentSlide = 0;
let interval;

function renderTestimonials() {
  container.innerHTML = "";
  dotsContainer.innerHTML = "";

  testimonialsData.forEach((testimonial, index) => {
    const slide = document.createElement("div");
    slide.classList.add("testimonial-slide");
    if (index === currentSlide) slide.classList.add("active");

    slide.innerHTML = `
      <img src="${testimonial.companyImage}" alt="Company Logo" class="testimonial-image">
      <p class="testimonial-text">${testimonial.text}</p>
      <div class="testimonial-user">
        <img src="${testimonial.userImage}" alt="User" class="testimonial-user-image">
        <div class="testimonial-user-info">
          <p class="testimonial-user-name">${testimonial.userName}</p>
          <p class="testimonial-user-designation">${testimonial.designation}</p>
        </div>
      </div>
    `;
    container.appendChild(slide);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === currentSlide) dot.classList.add("active");
    dot.addEventListener("click", () => {
      goToSlide(index);
      resetInterval();
    });
    dotsContainer.appendChild(dot);
  });
}

function goToSlide(index) {
  currentSlide = index;
  renderTestimonials();
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % testimonialsData.length;
  renderTestimonials();
}

function prevSlide() {
  currentSlide =
    (currentSlide - 1 + testimonialsData.length) % testimonialsData.length;
  renderTestimonials();
}

function startAutoSlide() {
  interval = setInterval(() => {
    nextSlide();
  }, 5000);
}

function resetInterval() {
  clearInterval(interval);
  startAutoSlide();
}

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetInterval();
});

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetInterval();
});

renderTestimonials();
startAutoSlide();
