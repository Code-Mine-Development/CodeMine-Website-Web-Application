import {_document} from "@angular/platform-browser/src/browser";
export class Coordinate {

  deskClicked: boolean = false;

  constructor(public variant: number, public top: number, public left: number, public front) {
  }


  transform(): string {
    const rotateY = this.variant === 1 ? 43 : 54;
    const rotateX = this.variant === 1 ? 51 : -60;
    const rotateZ = this.variant === 1 ? 21 : -21;
    const scale = this.variant === 1 ? 1.45 : 1.85;
    const skew = this.variant === 1 ? 24 : 5;
    return 'skew(-' + skew + 'deg) ' +
      'rotateY(-' + rotateY + 'deg) ' +
      'rotateX(' + rotateX + 'deg) ' +
      'scale(' + scale + ') ' +
      'rotateZ(' + rotateZ + 'deg)';
  }

  showDeskOwner(index, value) {
    let deskOwner = <HTMLElement>document.getElementsByClassName("deskOwner")[index];
    value == true ? deskOwner.style.opacity = "1" : deskOwner.style.opacity = "0";
  }

  offsetTop(): string {
    return this.top + 'px';
  }

  offsetLeft(): string {
    return this.left + 'px';
  }

  //on hover
  hoverDesk(index) {

    // // pull table
    this.front.nativeElement.style.transition = '0.2s';
    this.front.nativeElement.style.top = this.top - 25 + 'px';

    //show owner
    this.showDeskOwner(index, true);

  }

  //hover Out
  hoverOutDesk(index) {
    this.front.nativeElement.style.top = this.top + 'px';
    this.showDeskOwner(index, false);

  }


  //on Click desk
  showDetails(index) {
    this.deskClicked = true;
    this.showDeskOwner(index, true);
    let transformVariant = this.variant === 1 ? 'skew(0deg) rotateY(-58deg) rotateX(-8deg) scale(1, 1.3) rotateZ(14deg)'
      : 'skew(0deg) rotateY(-71deg) rotateX(5deg) scale(1.45) rotateZ(-11deg)';

    document.getElementById('personWrapper').style.transition = '1.8s';

    this.front.nativeElement.style.transform = transformVariant;

    document.getElementById('deskLayer').style.pointerEvents = 'none';

    const w = window.innerWidth;
    const h = window.outerHeight;
    const parent = document.getElementById('desk' + index);
    const d = <HTMLElement>parent.children[0];
    const divW = d.offsetWidth;
    const divH = d.offsetHeight;
    const bg = document.getElementById('officeBg');

   //get table to the center
    setTimeout(() => {
      d.style.position = 'absolute';
      d.style.top = (h / 2) - (divH / 2) - (+bg.getAttribute('data-y')) + 'px';
      d.style.left = (w / 2) - (divW / 2) + 230 - (+bg.getAttribute('data-x')) + 'px';
      d.style.transform = 'scale(1.5)';
    }, 300);

    //show little card
    setTimeout(() => {
      this.front.nativeElement.style.opacity = '0';
      document.getElementById('personView').classList.add('active');
    }, 320);

    //enlarge card
    setTimeout(() => {
      document.getElementById('personView').style.transform = "scale(1)";
      document.getElementById('personView').style.transition = ".2s ease-in";

    }, 400);
  }

//put desk back
  moveDown(index): void {
    this.deskClicked = false;
    this.front.nativeElement.style.opacity = '1';
    document.getElementById('deskLayer').style.pointerEvents = 'all';
    this.showDeskOwner(index, false);
    document.getElementById('personWrapper').style.transition = '0.3s';
    setTimeout(() => {
      document.getElementById('personView').classList.remove('active');
      document.getElementById('personView').style.transform = 'scale(0.4)';
    }, 50);
  }

}
