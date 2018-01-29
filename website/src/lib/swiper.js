export default class Swipe {

  constructor(element) {
    this.xDown = null;
    this.yDown = null;
    this.element = typeof element === 'string' ? document.querySelector(element) : element;

    this.element.addEventListener('touchstart', e => {
      this.xDown = e.touches[0].clientX;
      this.yDown = e.touches[0].clientY;
    }, { passive: true });
  }

  dummy() { return; }
  left(callback) { this.left = callback || this.dummy; return this; }
  right(callback) { this.right = callback || this.dummy; return this; }
  up(callback) { this.up = callback || this.dummy; return this; }
  down(callback) { this.down = callback || this.dummy; return this; }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) return;

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;
    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) xDiff > 0 ? this.left() : this.right();
    else yDiff > 0 ? this.up() : this.down();
    this.xDown = null;
    this.yDown = null;
  }

  init() {
    this.element.addEventListener('touchmove', e => this.handleTouchMove(e), { passive: true });
  }

}