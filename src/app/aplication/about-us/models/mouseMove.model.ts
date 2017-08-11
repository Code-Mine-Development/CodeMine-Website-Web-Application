import {SmoothMove} from '../interfaces/smoothMove.interface';

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

function animation() {
  data.x += (data.lFollowX - data.x) * data.friction;
  data.y += (data.lFollowY - data.y) * data.friction;
  data.translate = 'translate(' + data.x + 'px, ' + data.y + 'px)';

  const bg = document.getElementById('officeBg'),
    desks = document.getElementById('deskLayer');
  if (!bg && !desks)
    return;
  bg['style']['transform'] = data.translate;
  desks['style']['transform'] = data.translate;
  requestId = window.requestAnimationFrame(animation);
}

function start() {
  const bg = document.getElementById('officeBg');
  data.x = +bg.getAttribute('data-x');
  data.y = +bg.getAttribute('data-y');
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
  constructor(public windowWidth: number) {
  }
  move(event) {
    const bg = document.getElementById('officeBg');

    data.lMouseX = Math.max(-100, Math.min(100, this.windowWidth / 2 - event.clientX));
    data.lMouseY = Math.max(-100, Math.min(100, this.windowWidth / 2 - event.clientY));
    data.lFollowX = (15 * data.lMouseX) / 100 + (+bg.getAttribute('data-x'));
    data.lFollowY = (15 * data.lMouseY) / 100 + (+bg.getAttribute('data-y'));
  }
  playAnimation() {
    animation();
  }
  changeWidth(width: number) {
    this.windowWidth = width;
  }

  setMove(value: boolean) {
    !value ? stop() : start();
  }
}
