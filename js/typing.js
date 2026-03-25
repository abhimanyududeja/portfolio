/**
 * Typing Animation Module
 * Creates a typewriter effect for the hero section subtitle
 * @author Abhimanyu Dudeja
 *
 * This is an original JavaScript implementation (not a library)
 * featuring a typing animation that cycles through different roles/titles.
 */

/**
 * TypeWriter class for creating typing animations
 * @class
 */
class TypeWriter {
  /**
   * Create a TypeWriter instance
   * @param {HTMLElement} element - The element to type into
   * @param {string[]} words - Array of words to cycle through
   * @param {Object} options - Configuration options
   * @param {number} options.typeSpeed - Speed of typing in ms
   * @param {number} options.deleteSpeed - Speed of deleting in ms
   * @param {number} options.pauseDuration - Pause duration after typing word
   */
  constructor(element, words, options = {}) {
    this.element = element;
    this.words = words;
    this.typeSpeed = options.typeSpeed || 100;
    this.deleteSpeed = options.deleteSpeed || 50;
    this.pauseDuration = options.pauseDuration || 2000;

    this.currentWordIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.isWaiting = false;

    // Bind methods to preserve context
    this.type = this.type.bind(this);
  }

  /**
   * Main typing function that handles the animation loop
   * Manages typing, deleting, and cycling through words
   */
  type() {
    const currentWord = this.words[this.currentWordIndex];

    // Handle waiting state after completing a word
    if (this.isWaiting) {
      this.isWaiting = false;
      this.isDeleting = true;
      setTimeout(this.type, this.deleteSpeed);
      return;
    }

    // Calculate the displayed text based on current state
    if (this.isDeleting) {
      // Deleting characters
      this.currentCharIndex--;
      this.element.textContent = currentWord.substring(
        0,
        this.currentCharIndex
      );

      // Check if word is fully deleted
      if (this.currentCharIndex === 0) {
        this.isDeleting = false;
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      }

      setTimeout(this.type, this.deleteSpeed);
    } else {
      // Typing characters
      this.currentCharIndex++;
      this.element.textContent = currentWord.substring(
        0,
        this.currentCharIndex
      );

      // Check if word is fully typed
      if (this.currentCharIndex === currentWord.length) {
        this.isWaiting = true;
        setTimeout(this.type, this.pauseDuration);
        return;
      }

      setTimeout(this.type, this.typeSpeed);
    }
  }

  /**
   * Start the typing animation
   */
  start() {
    if (this.element && this.words.length > 0) {
      setTimeout(this.type, this.pauseDuration / 2);
    }
  }

  /**
   * Reset the animation to initial state
   */
  reset() {
    this.currentWordIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.isWaiting = false;
    this.element.textContent = "";
  }
}

/**
 * Initialize the typing animation on page load
 */
function initTypingAnimation() {
  const typingElement = document.getElementById("typing-text");

  if (!typingElement) {
    return;
  }

  // Define the roles/titles to cycle through
  const roles = [
    "Data Engineer.",
    "ML Researcher.",
    "Full Stack Developer.",
    "Problem Solver.",
  ];

  // Create and start the typewriter
  const typewriter = new TypeWriter(typingElement, roles, {
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseDuration: 2500,
  });

  typewriter.start();
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTypingAnimation);
} else {
  initTypingAnimation();
}

// Export for potential external use
export { TypeWriter, initTypingAnimation };
