/**
 * Main JavaScript Module
 * Handles navigation, mobile menu, and shared functionality
 * @author Abhimanyu Dudeja
 */

/**
 * Initialize mobile navigation toggle functionality
 * Handles hamburger menu animation and mobile menu visibility
 */
function initMobileNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (!navToggle || !navMenu) {
    return;
  }

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Prevent body scroll when menu is open
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";
  });

  // Close menu when clicking on a nav link
  const navLinks = navMenu.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInside =
      navToggle.contains(event.target) || navMenu.contains(event.target);

    if (!isClickInside && navMenu.classList.contains("active")) {
      navToggle.classList.remove("active");
      navMenu.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

/**
 * Initialize header scroll behavior
 * Adds shadow and background change on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector(".header");

  if (!header) {
    return;
  }

  let lastScrollY = window.scrollY;
  const scrollThreshold = 50;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "none";
    }

    lastScrollY = currentScrollY;
  });
}

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll("a[href^=\"#\"]");

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");

      if (href === "#") {
        return;
      }

      const targetElement = document.querySelector(href);

      if (targetElement) {
        event.preventDefault();
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/**
 * Initialize scroll-triggered animations
 * Uses Intersection Observer for performance
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .fact-card"
  );

  if (animatedElements.length === 0) {
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
}

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
  initMobileNav();
  initHeaderScroll();
  initSmoothScroll();
  initScrollAnimations();
}

// Run initialization when DOM is fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Export functions for potential use in other modules
export {
  initMobileNav,
  initHeaderScroll,
  initSmoothScroll,
  initScrollAnimations,
};
