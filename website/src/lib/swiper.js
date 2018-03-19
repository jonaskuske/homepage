/** A handler listening for swipe gestures. Allows assigning a callback to upwards, downwards, rightwards and leftwards swipes which will be called whenever the respective swipe is registered on the given DOM Node. */
export default class Swipe {

  /**
   * Create a swipe handler for a given DOM Node.
   * @param {string|Node} element A CSS selector or a DOM Node.
   */
  constructor(element) {
    /** @private */
    this.ـxDown = null;
    /** @private */
    this.ـyDown = null;

    /** @private */
    this.ـelement = typeof element === 'string' ? document.querySelector(element) : element;

    this.ـelement.addEventListener('touchstart', e => {
      this.ـxDown = e.touches[0].clientX;
      this.ـyDown = e.touches[0].clientY;
    }, { passive: true });
    this.ـelement.addEventListener('touchmove', e => {
      this.ـhandleTouchMove(e);
    }, { passive: true });
  }

  /**
   * Takes a function and runs it everytime a leftwards swipe is registered.
   * @param {function} callback The function to be executed.
   */
  left(callback) {
    /** @private */
    this.ـl = callback;
    return this;
  }

  /**
   * Takes a function and runs it everytime a rightwards swipe is registered.
   * @param {function} callback The function to be executed.
   */
  right(callback) {
    /** @private */
    this.ـr = callback;
    return this;
  }

  /**
   * Takes a function and runs it everytime an upwards swipe is registered.
   * @param {function} callback The function to be executed.
   */
  up(callback) {
    /** @private */
    this.ـu = callback;
    return this;
  }

  /**
   * Takes a function and runs it everytime a downwards swipe is registered.
   * @param {function} callback The function to be executed.
   */
  down(callback) {
    /** @private */
    this.ـd = callback;
    return this;
  }

  /** @private */
  ـhandleTouchMove(evt) {
    if (!this.ـxDown || !this.ـyDown) return;

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;
    const xDiff = this.ـxDown - xUp;
    const yDiff = this.ـyDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      xDiff > 0
        ? (this.ـl ? this.ـl() : null)
        : (this.ـr ? this.ـr() : null);
    }
    else {
      yDiff > 0
        ? (this.ـu ? this.ـu() : null)
        : (this.ـd ? this.ـd() : null);
    }
    this.ـxDown = null;
    this.ـyDown = null;
  }

}