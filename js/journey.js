/**
 * Journey Page Module
 * Handles timeline animations and interactive elements
 * @author Abhimanyu Dudeja
 *
 * This page content was generated with assistance from Claude AI (Anthropic)
 */

/**
 * TimelineAnimator class for animating timeline items on scroll
 * @class
 */
class TimelineAnimator {
  /**
   * Create a TimelineAnimator instance
   * @param {string} itemSelector - Selector for timeline items
   * @param {Object} options - Configuration options
   */
  constructor(itemSelector, options = {}) {
    this.items = document.querySelectorAll(itemSelector);
    this.threshold = options.threshold || 0.2;
    this.rootMargin = options.rootMargin || "0px 0px -100px 0px";

    this.observer = null;
    this.animatedItems = new Set();
  }

  /**
   * Initialize the timeline animator
   */
  init() {
    if (this.items.length === 0) {
      return;
    }

    // Set initial styles for items
    this.items.forEach((item) => {
      const isLeft = item.classList.contains("timeline-item-left");
      item.style.opacity = "0";
      item.style.transform = isLeft ? "translateX(-50px)" : "translateX(50px)";
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    // Create intersection observer
    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      {
        root: null,
        rootMargin: this.rootMargin,
        threshold: this.threshold,
      }
    );

    // Observe all items
    this.items.forEach((item) => {
      this.observer.observe(item);
    });
  }

  /**
   * Handle intersection observer callback
   * @param {IntersectionObserverEntry[]} entries - Observed entries
   */
  handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !this.animatedItems.has(entry.target)) {
        this.animateItem(entry.target);
        this.animatedItems.add(entry.target);
        this.observer.unobserve(entry.target);
      }
    });
  }

  /**
   * Animate a single timeline item
   * @param {HTMLElement} item - Timeline item to animate
   */
  animateItem(item) {
    item.style.opacity = "1";
    item.style.transform = "translateX(0)";

    // Animate the marker with a slight delay
    const marker = item.querySelector(".timeline-marker");
    if (marker) {
      marker.style.transition = "transform 0.4s ease 0.2s";
      marker.style.transform = "translateX(-50%) scale(1.1)";

      setTimeout(() => {
        marker.style.transform = "translateX(-50%) scale(1)";
      }, 400);
    }
  }

  /**
   * Reset all animations
   */
  reset() {
    this.animatedItems.clear();
    this.items.forEach((item) => {
      const isLeft = item.classList.contains("timeline-item-left");
      item.style.opacity = "0";
      item.style.transform = isLeft ? "translateX(-50px)" : "translateX(50px)";
      this.observer.observe(item);
    });
  }
}

/**
 * Initialize fact cards hover animation
 */
function initFactCards() {
  const factCards = document.querySelectorAll(".fact-card");

  factCards.forEach((card, index) => {
    // Add staggered entrance animation
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

    // Create observer for entrance animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);

    // Add hover bounce effect to emoji
    card.addEventListener("mouseenter", () => {
      const emoji = card.querySelector(".fact-emoji");
      if (emoji) {
        emoji.style.transition = "transform 0.3s ease";
        emoji.style.transform = "scale(1.2) rotate(10deg)";
      }
    });

    card.addEventListener("mouseleave", () => {
      const emoji = card.querySelector(".fact-emoji");
      if (emoji) {
        emoji.style.transform = "scale(1) rotate(0deg)";
      }
    });
  });
}

/**
 * Initialize journey map animation
 */
function initJourneyMap() {
  const mapLine = document.querySelector(".map-line");
  const mapPoints = document.querySelectorAll(".map-point");

  if (!mapLine || mapPoints.length === 0) {
    return;
  }

  // Animate the map elements on page load
  mapPoints.forEach((point, index) => {
    point.style.opacity = "0";
    point.style.transform = "scale(0.5)";
    point.style.transition = `opacity 0.5s ease ${index * 0.3 + 0.5}s, transform 0.5s ease ${index * 0.3 + 0.5}s`;

    setTimeout(() => {
      point.style.opacity = "1";
      point.style.transform = "scale(1)";
    }, 100);
  });

  mapLine.style.width = "0";
  mapLine.style.transition = "width 1s ease 0.8s";

  setTimeout(() => {
    mapLine.style.width = "150px";
  }, 100);
}

/**
 * Initialize journey page functionality
 */
function initJourneyPage() {
  // Initialize timeline animations
  const timelineAnimator = new TimelineAnimator(".timeline-item", {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  });
  timelineAnimator.init();

  // Initialize fact cards
  initFactCards();

  // Initialize journey map
  initJourneyMap();
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initJourneyPage);
} else {
  initJourneyPage();
}

// Export for external use
export { TimelineAnimator, initJourneyPage };
