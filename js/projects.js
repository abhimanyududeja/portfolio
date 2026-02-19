/**
 * Projects Page Module
 * Handles project filtering and animations
 * @author Abhimanyu Dudeja
 */

/**
 * ProjectFilter class for filtering project cards
 * @class
 */
class ProjectFilter {
  /**
   * Create a ProjectFilter instance
   * @param {string} filterSelector - Selector for filter buttons
   * @param {string} projectSelector - Selector for project cards
   */
  constructor(filterSelector, projectSelector) {
    this.filterButtons = document.querySelectorAll(filterSelector);
    this.projectCards = document.querySelectorAll(projectSelector);
    this.activeFilter = "all";

    // Bind methods
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.filterProjects = this.filterProjects.bind(this);
  }

  /**
   * Initialize the filter functionality
   */
  init() {
    if (this.filterButtons.length === 0 || this.projectCards.length === 0) {
      return;
    }

    this.filterButtons.forEach((button) => {
      button.addEventListener("click", this.handleFilterClick);
    });
  }

  /**
   * Handle filter button click
   * @param {Event} event - Click event
   */
  handleFilterClick(event) {
    const button = event.currentTarget;
    const filter = button.dataset.filter;

    if (!filter) {
      return;
    }

    // Update active button state
    this.filterButtons.forEach((btn) => {
      btn.classList.remove("filter-btn-active");
    });
    button.classList.add("filter-btn-active");

    // Filter projects
    this.activeFilter = filter;
    this.filterProjects(filter);
  }

  /**
   * Filter project cards based on category
   * @param {string} filter - Category to filter by
   */
  filterProjects(filter) {
    this.projectCards.forEach((card, index) => {
      const category = card.dataset.category;
      const shouldShow = filter === "all" || category === filter;

      // Add staggered animation delay
      const delay = index * 100;

      if (shouldShow) {
        card.style.display = "block";
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
          card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, delay);
      } else {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  }

  /**
   * Get count of projects in a category
   * @param {string} category - Category to count
   * @returns {number} Count of projects
   */
  getProjectCount(category) {
    if (category === "all") {
      return this.projectCards.length;
    }

    return Array.from(this.projectCards).filter(
      (card) => card.dataset.category === category
    ).length;
  }
}

/**
 * Initialize projects page functionality
 */
function initProjectsPage() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length === 0 || projectCards.length === 0) {
    return;
  }

  // Add click event to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.dataset.filter;

      // Update active button state
      filterButtons.forEach((btn) => {
        btn.classList.remove("filter-btn-active");
      });
      this.classList.add("filter-btn-active");

      // Filter projects
      projectCards.forEach((card, index) => {
        const category = card.dataset.category;
        const shouldShow = filter === "all" || category === filter;

        if (shouldShow) {
          card.style.display = "block";
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";

          setTimeout(() => {
            card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, index * 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(20px)";

          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Initialize hover effects for project cards
  initProjectHoverEffects();
}

/**
 * Add interactive hover effects to project cards
 */
function initProjectHoverEffects() {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const placeholder = card.querySelector(".project-placeholder");
      if (placeholder) {
        placeholder.style.transform = "scale(1.1)";
      }
    });

    card.addEventListener("mouseleave", () => {
      const placeholder = card.querySelector(".project-placeholder");
      if (placeholder) {
        placeholder.style.transform = "scale(1)";
      }
    });
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  initProjectsPage();
});

// Export for external use
export { ProjectFilter, initProjectsPage };
