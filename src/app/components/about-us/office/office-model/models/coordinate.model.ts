export class Coordinate {

  constructor(public deskCoordinate, public front, public background: Element) {
  }


  transform(): string {
    const rotateY = this.deskCoordinate.variant === 1 ? 43 : 54,
      rotateX = this.deskCoordinate.variant === 1 ? 51 : -60,
      rotateZ = this.deskCoordinate.variant === 1 ? 21 : -21,
      scale = this.deskCoordinate.variant === 1 ? 1.47 : 1.84,
      skew = this.deskCoordinate.variant === 1 ? 24 : 5;
    return 'skew(-' + skew + 'deg) ' +
      'rotateY(-' + rotateY + 'deg) ' +
      'rotateX(' + rotateX + 'deg) ' +
      'scale(' + scale + ') ' +
      'rotateZ(' + rotateZ + 'deg)';
  }


  offsetTop(): string {
    return this.deskCoordinate.top + 'px';
  }

  offsetLeft(): string {
    return this.deskCoordinate.left + 'px';
  }


  // on Click desk
  showDetails() {
    const transformVariant = this.deskCoordinate.variant === 1 ? 'skew(0deg) rotateY(-58deg) rotateX(-8deg) scale(1, 1.3) rotateZ(14deg)'
        : 'skew(0deg) rotateY(-71deg) rotateX(5deg) scale(1.5) rotateZ(-11deg)',
      w = window.innerWidth,
      h = window.innerHeight,
      divW = this.front.nativeElement.offsetWidth,
      divH = this.front.nativeElement.offsetHeight,
      computedBg = window.getComputedStyle(this.background),
      bgTop = (parseInt(computedBg.height) - h) / 2;

    this.front.nativeElement.style.transform = transformVariant;
    // get table to the center
    setTimeout(() => {
      this.front.nativeElement.style.top = (h / 2) - (divH / 2) - (+this.background.getAttribute('data-y')) + bgTop + 'px';
      this.front.nativeElement.style.left = (w / 2) - (divW / 2) + 230 - (+this.background.getAttribute('data-x')) + 'px';
      this.front.nativeElement.style.transform = 'scale(1.5)';
    }, 300);

    // show little card
    setTimeout(() => {
      this.front.nativeElement.style.opacity = '0';
    }, 320);

  }

// put desk back
  moveDown(): void {
    this.front.nativeElement.style.opacity = '1';
  }

}
