


export class ScrollToClass{
  private scrollingOpponent: any = null;
  private targetPosition: number = null;
  private currentPosition: number = null;
  private start: number = null;
  private duration = 500;

  private target;
  private onScreenLocation;
  private opponent;

  private animationEndCallBack;

  constructor(private document, target, onScreenLocation = 'top', opponent?, animationEndCallBack?) {
    this.target = target;
    this.opponent = opponent || null;
    this.onScreenLocation = onScreenLocation;
    this.scrollTo();
    this.animationEndCallBack = animationEndCallBack;
  }

  private reset() {
    if (this.animationEndCallBack) {
      this.animationEndCallBack();
    }

    this.scrollingOpponent = null;
    this.targetPosition = null;
    this.currentPosition = null;
    this.start = null;
    this.animationEndCallBack = null;
  }

  private chooseOppenent() {
    this.scrollingOpponent = this.opponent ? this.opponent : this.document;
  }

  private filterTarget() {
    if (this.target === 'SiteHead' || typeof this.target === 'number') {
      return;
    }

    this.target = typeof this.target === 'object' ? this.target : this.document.querySelector('#' + this.target);
  }


  private scrollTo() {
    if (this.start) {
      return;
    }

    this.filterTarget();
    this.chooseOppenent();
    this.targetPosition = this.getTargetPosition();
    this.currentPosition = this.getCurrentPosition();
    window.requestAnimationFrame(this.scrollToElement.bind(this));
  }

  private scrollToElement(timestamp) {
    if (!this.start) {
      this.start = timestamp;
    }
    const progress = timestamp - this.start,
      progressFactor = progress / this.duration > 1 ? 1 : progress / this.duration ,
      progressFactorWithEasing = Math.sqrt(progressFactor),
      distance = this.targetPosition - this.currentPosition,
      animationPosition = this.currentPosition + (distance * progressFactorWithEasing);
    this.changeScrollTop(animationPosition);

    if (this.duration > progress) {
      window.requestAnimationFrame(this.scrollToElement.bind(this));
    } else {
      this.reset()
    }
  }

  private getCurrentPosition() {
    if (this.opponent) {
      return this.scrollingOpponent.scrollTop;
    }
    return this.scrollingOpponent.body.scrollTop || this.scrollingOpponent.documentElement.scrollTop;
  }

  private getTargetPosition() {
    if (typeof this.target === 'number') {
      return this.target;
    } else if (this.target === 'SiteHead') {
      return 0;
    }
    let distance = this.target.offsetTop;
    let parent: any = this.target.offsetParent;
    while (parent) {
      distance += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return this.parseLocationDistance(distance);
  }

  private parseLocationDistance(distance: number) {
    const halfHeight = (this.opponent ? this.opponent.offsetHeight : window.innerHeight) / 2,
      halfTargetHeight = this.target.offsetHeight / 2;

    if (this.onScreenLocation === 'top') {
      return distance;
    } else if (this.onScreenLocation === 'center') {
      return distance - halfHeight + halfTargetHeight;
    } else if (this.onScreenLocation === 'bottom') {
      return distance + (2 * halfTargetHeight) - 60;
    }
    return distance;
  }


  private changeScrollTop(position) {
    if (!this.scrollingOpponent) {
      return;
    }

    if (this.opponent) {
      this.scrollingOpponent.scrollTop = position;
    } else {
      this.scrollingOpponent.documentElement.scrollTop = position;
      this.scrollingOpponent.body.scrollTop = position;
    }

  }
}
