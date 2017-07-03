export class Coordinate {
  constructor(public variant: number, public top: number, public left: number, public front, public backSide, public leftSide) {
  }
  transform(): string {
    const rotateY = this.variant === 1 ? 14 : 66;
    const rotateX = this.variant === 1 ? 49 : 66;
    const rotateZ = this.variant === 1 ? 29 : 66;
    const skew = this.variant === 1 ? 33 : 66;
    return 'skew(-' + skew + 'deg) ' +
      'rotateY(-' + rotateY + 'deg) ' +
      'rotateX(' + rotateX + 'deg) ' +
      'rotateZ(' + rotateZ + 'deg)';
  }
  offsetTop(): string {
    return this.top + 'px';
  }
  offsetLeft(): string {
    return this.left + 'px';
  }
  restyleDesk(value): void {
    value ? this.moveUp() : this.moveDown();
  }
  private moveUp(): void {
    this.front.nativeElement.style.transition = '0.3s';
    this.front.nativeElement.style.top = this.top - 50 + 'px';
    setTimeout(() => {
      this.front.nativeElement.classList.add('animationVariant1');
    }, 300);
    setTimeout(() => {
      this.backSide.nativeElement.classList.add('animationVariant1');
      this.leftSide.nativeElement.classList.add('animationVariant1');
    }, 550)
  }
  private moveDown(): void {
  }
}
