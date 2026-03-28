const toggle = document.querySelector(".menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const siteHeader = document.querySelector(".site-header-home");

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
  const updateHeaderFade = () => {
    const opacity = Math.max(0, 1 - window.scrollY / 220);
    siteHeader.style.opacity = String(opacity);
    siteHeader.classList.toggle("is-hidden", opacity <= 0.04 && !mobileMenu?.classList.contains("is-open"));
  };

  updateHeaderFade();
  window.addEventListener("scroll", updateHeaderFade, { passive: true });

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      requestAnimationFrame(updateHeaderFade);
    });
  }
}
