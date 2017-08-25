import {SmoothMove} from '../../interfaces/smoothMove.interface';

const data: SmoothMove = {
  lFollowX: 0,
  lMouseX: 0,
  lFollowY: 0,
  lMouseY: 0,
  x: 0,
  y: 0,
  friction: 1 / 30,
  translate: '0px'
};
let requestId;
let background;
let deskLayer;

function animation() {
  data.x += (data.lFollowX - data.x) * data.friction;
  data.y += (data.lFollowY - data.y) * data.friction;
  data.translate = 'translate(' + data.x + 'px, ' + data.y + 'px)';

  if (!background && !deskLayer) {
    return;
  }
  background['style']['transform'] = data.translate;
  deskLayer['style']['transform'] = data.translate;
  requestId = window.requestAnimationFrame(animation);
}

function start(bg, desk) {
  data.x = +bg.getAttribute('data-x');
  data.y = +bg.getAttribute('data-y');
  background = bg;
  deskLayer = desk;
  if (!requestId) {
    requestId = window.requestAnimationFrame(animation);
  }
}

function stop() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
    requestId = undefined;
  }
}

export class MouseMove {
  private background;
  private deskLayer;

  constructor(public windowWidth: number) {
  }

  setElements(bg, deskLayer) {
    this.background = bg.nativeElement;
    this.deskLayer = deskLayer.nativeElement;
  }

  move(event) {
    if(!this.background){
      return;
    }
    const bg = this.background;
    data.lMouseX = Math.max(-100, Math.min(100, this.windowWidth / 2 - event.clientX));
    data.lMouseY = Math.max(-100, Math.min(100, this.windowWidth / 2 - event.clientY));
    data.lFollowX = (15 * data.lMouseX) / 100 + (+bg.getAttribute('data-x'));
    data.lFollowY = (15 * data.lMouseY) / 100 + (+bg.getAttribute('data-y'));
  }

  playAnimation() {
    if(!this.background){
      return;
    }
    animation();
  }

  changeWidth(width: number) {
    this.windowWidth = width;
  }

  setMove(value: boolean) {
    if(!this.background){
      return;
    }
    !value ? stop() : start(this.background, this.deskLayer);
  }
}
