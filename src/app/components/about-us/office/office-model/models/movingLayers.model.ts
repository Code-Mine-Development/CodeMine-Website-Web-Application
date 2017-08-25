import {interact} from 'interactjs/dist/interact'
import set = Reflect.set;

export class MovingLayers {
  private background;
  private deskLayer;

  constructor() {
    interact('.draggable')
      .draggable({
        inertia: true,
        restrict: {
          endOnly: true,
          elementRect: {top: 0, left: 0, bottom: 1, right: 1}
        },
        autoScroll: true,
        onmove: this.dragMoveListener.bind(this),
      });
  }

  setElements(bg, deskLayer) {
    this.background = bg.nativeElement;
    this.deskLayer = deskLayer.nativeElement;
  }

  private dragMoveListener(event) {
    if (!this.background) {
      return;
    }
    const target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy,
      bg = this.background;
    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    bg.style.webkitTransform = bg.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    bg.setAttribute('data-x', x);
    bg.setAttribute('data-y', y);
  }

  resetPosition() {
    if (!this.background || !this.deskLayer) {
      return false;
    }
    const x = 0,
      y = 0,
      bg = this.background,
      target = this.deskLayer;

    target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    target.setAttribute('data-x', '0');
    target.setAttribute('data-y', '0');
    bg.style.webkitTransform = bg.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    bg.setAttribute('data-x', '0');
    bg.setAttribute('data-y', '0');
  }
}
