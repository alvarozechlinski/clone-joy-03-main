const toggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const siteHeader = document.querySelector(".site-header");

if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const revealItems = document.querySelectorAll(".sr-reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (siteHeader) {
  const updateHeaderState = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 72 || mobileMenu?.classList.contains("is-open"));
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      requestAnimationFrame(updateHeaderState);
    });
  }
}

const testimonialRoot = document.querySelector("[data-testimonials]");
if (testimonialRoot) {
  const slides = Array.from(testimonialRoot.querySelectorAll("[data-testimonial-slide]"));
  const dots = Array.from(testimonialRoot.querySelectorAll("[data-testimonial-dot]"));
  const prevButton = testimonialRoot.querySelector("[data-testimonial-prev]");
  const nextButton = testimonialRoot.querySelector("[data-testimonial-next]");
  let currentIndex = 0;

  const renderTestimonial = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentIndex);
    });
  };

  prevButton?.addEventListener("click", () => renderTestimonial(currentIndex - 1));
  nextButton?.addEventListener("click", () => renderTestimonial(currentIndex + 1));
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => renderTestimonial(index));
  });
}
