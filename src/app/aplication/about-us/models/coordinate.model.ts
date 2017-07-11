import $ from 'jquery';

export class Coordinate {
  constructor(public variant: number, public top: number, public left: number, public front) {
  }
  transform(): string {
    const rotateY = this.variant === 1 ? 14 : 52;
    const rotateX = this.variant === 1 ? 49 : -61;
    const rotateZ = this.variant === 1 ? 29 : -23;
    const scale = this.variant=== 1 ? 1 : 1.45;
    const skew = this.variant === 1 ? 33 : 10;
    return 'skew(-' + skew + 'deg) ' +
      'rotateY(-' + rotateY + 'deg) ' +
      'rotateX(' + rotateX + 'deg) ' +
      'scale(' + scale + ') ' +
      'rotateZ(' + rotateZ + 'deg)';
  }



  offsetTop(): string {
    return this.top + 'px';
  }
  offsetLeft(): string {
    return this.left + 'px';
  }
  restyleDesk(value, index): void {
    value ? this.moveUp(index) : this.moveDown();
  }
  private moveUp(index): void {
    const layer = $('#deskLayer');
    layer[0].style.pointerEvents = 'none';
    this.front.nativeElement.style.transition = '0.3s';
    this.front.nativeElement.style.top = this.top - 50 + 'px';
    setTimeout(() => {
      this.front.nativeElement.classList.add('animationVariant1');
    }, 300);
    setTimeout(() => {
      const w = $(window).width();
      const h = $(window).height();
      const parent = $('#desk' + index);
      const d = parent[0].children[0];
      const divW = $(d).width();
      const divH = $(d).height();
      const bg = document.getElementById('officeBg');

      d.classList.value = d.classList.value + ' ' + 'big';
      d.style.position = 'absolute';
      d.style.top = (h / 2) - (divH / 2) + 100 - (+bg.getAttribute('data-y')) + 'px';
      d.style.left = (w / 2) - (divW / 2) + 300 - (+bg.getAttribute('data-x')) + 'px';
      d.style.transform = '';
    }, 650);

    setTimeout(() => {
      const person = $('#personView');
      const personInfo = $('#personWrapper');
      person.addClass('active');
      personInfo.addClass('active');
    }, 950)
  }
  private moveDown(): void {
  }
}
