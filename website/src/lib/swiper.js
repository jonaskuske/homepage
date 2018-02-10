export default class Swipe {

  constructor(element) {
    this.xDown = null;
    this.yDown = null;
    this.element = typeof element === 'string' ? document.querySelector(element) : element;

    this.element.addEventListener('touchstart', e => {
      this.xDown = e.touches[0].clientX;
      this.yDown = e.touches[0].clientY;
    }, { passive: true });
    this.element.addEventListener('touchmove', e => {
      this.handleTouchMove(e);
    }, { passive: true });
  }

  left(callback) { this.actionLeft = callback; return this; }
  right(callback) { this.actionRight = callback; return this; }
  up(callback) { this.actionUp = callback; return this; }
  down(callback) { this.actionDown = callback; return this; }

  actionLeft() { }
  actionRight() { }
  actionUp() { }
  actionDown() { }

  handleTouchMove(evt) {
    if (!this.xDown || !this.yDown) return;

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;
    const xDiff = this.xDown - xUp;
    const yDiff = this.yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) xDiff > 0 ? this.actionLeft() : this.actionRight();
    else yDiff > 0 ? this.actionUp() : this.actionDown();
    this.xDown = null;
    this.yDown = null;
  }

}