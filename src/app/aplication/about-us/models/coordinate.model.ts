import $ from 'jquery';

export class Coordinate{

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
    value ? this.moveUp(index) : this.moveDown(index);
  }
  private moveUp(index): void {
    document.getElementById('personWrapper').style.transition = '1.8s';

    const layer = $('#deskLayer');

    this.front.nativeElement.style.transition = '0.3s';
    this.front.nativeElement.style.top = this.top - 20 + 'px';

    let deskOwner = <HTMLElement>document.getElementsByClassName("deskOwner")[index];
    deskOwner.style.opacity = "1";
  }

  private moveDown(index): void {
    const layer = $('#deskLayer');
    layer[0].style.pointerEvents = 'all';
    document.getElementById('personWrapper').style.transition = '0.3s';

    setTimeout(() => {
      const person = $('#personView');
      const personInfo = $('#personWrapper');
      person.removeClass('active');
      personInfo.removeClass('active');
    }, 50)

    setTimeout(() => {
      this.front.nativeElement.classList.remove('animationVariant1');
    }, 300);
  }


  showDetails(index){
    document.getElementById('personWrapper').style.transition = '1.8s';

    const layer = $('#deskLayer');

    this.front.nativeElement.style.transition = '0.3s';
    this.front.nativeElement.style.top = this.top - 50 + 'px';
    let deskOwner = <HTMLElement>document.getElementsByClassName("deskOwner")[index];
    deskOwner.style.opacity = "1";

    setTimeout(() => {
      this.front.nativeElement.classList.add('animationVariant1');
    }, 50);
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
      d.style.transform = 'scale(1.6)';
    }, 300);

    setTimeout(() => {
      const person = $('#personView');
      const personInfo = $('#personWrapper');
      person.addClass('active');
      personInfo.addClass('active');
    }, 500)
  }

}
