import {Component, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {ScrollController} from '../../../services/scroll.controller';
import {AnimationConfig} from '../../../animation.config';

@Component({
  selector: 'app-home-information-animation',
  templateUrl: './home-information-animation.component.html',
  styleUrls: ['./home-information-animation.component.scss']
})
export class HomeInformationAnimationComponent implements OnInit, OnDestroy {
  loadingList = [];
  private scrollSubscriber;
  visible = 0;
  private shouldBeVisible = 0;
  private maxLoadingQuantity = 8;
  private loadingQuantity = 0;


  private filesIterator(list) {
    let index = 0,
      func,
      precision = 50;
    const loadingMap: Map<number, boolean> = new Map(),
      keyFrames: number[] = [0, 52, 90, 157, 248, 326, 388, 495, 592, 672, 785];

    const getFrameIndex = () => {
      const tempIndex = keyFrames.find((value) => (!loadingMap.has(value)));
      if (!tempIndex) {
        if (precision === 0) {
          return -1;
        }
        index += precision;
        if (index > AnimationConfig.animationFrames) {
          precision = Math.floor(precision / 2);
          index = precision;
        }
        if (loadingMap.has(index)) {
          return getFrameIndex();
        }
        return index;
      }
      return tempIndex;
    };



    return {
      getFile(fn) {
        func = fn;
        const tempIndex = getFrameIndex();
        if (tempIndex < 0) {
          return;
        }
        console.log(tempIndex);
        func(list[tempIndex], tempIndex);
        loadingMap.set(tempIndex, true);
      },
      next() {
        if (func) {
          const tempIndex = getFrameIndex();
          if (tempIndex < 0) {
            return;
          }
          console.log(tempIndex);
          func(list[tempIndex], tempIndex);
          loadingMap.set(tempIndex, true);
        }
      }
    }
  }

  constructor(private scrollController: ScrollController, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.preloadFrames();
    this.scrollSubscriber = this.scrollController.getScrollTop().subscribe((section) => {
      if (section.frame > AnimationConfig.animationFrames) {
        return;
      }
      this.updateVisibleFrame(section.frame);
    });
  }

  updateVisibleFrame(frame?: number) {
    if (frame) {
      this.shouldBeVisible = frame;
    }
    if (this.loadingList[this.shouldBeVisible]) {
      this.visible = this.shouldBeVisible;
      return;
    }
    const tempTestCount = (AnimationConfig.animationFrames - this.shouldBeVisible) > this.shouldBeVisible ?
      (AnimationConfig.animationFrames - this.shouldBeVisible) : this.shouldBeVisible;
    let testDistance = 0;
    while (tempTestCount < testDistance) {
      if (this.loadingList[this.shouldBeVisible - testDistance]) {
        this.visible = this.shouldBeVisible - testDistance;
        break;
      } else if (this.loadingList[this.shouldBeVisible + testDistance]) {
        this.visible = this.shouldBeVisible - testDistance;
        break;
      }
      testDistance++;
    }
  }

  ngOnDestroy() {
    if (this.scrollSubscriber) {
      this.scrollSubscriber.unsubscribe();
    }
  }

  preloadFrames() {
    const tempFileLink = [];
    for (let i = 0; i < AnimationConfig.animationFrames + 1; i++) {
      tempFileLink.push(this.getFilePath(i));
    }
    this.loadFiles(tempFileLink);
  }

  loadFiles(list) {
    const iterator = this.filesIterator(list);

    iterator.getFile((file, index) => {
      if (!file) {
        return;
      }
      this.loadingQuantity++;
      if (this.loadingQuantity < this.maxLoadingQuantity) {
        iterator.next();
      }
      this.loadFile(file, () => {
        this.loadingList[index] = file;
        this.updateVisibleFrame();
        iterator.next();
      });
    })
  }

  loadFile(file, cb) {
    const element = this.renderer.createElement('img');
    this.renderer.listen(element, 'load', () => {
      this.loadingQuantity--;
      cb();
    });
    this.renderer.setProperty(element, 'src', file);
  }

  getFilePath(index) {
    return AnimationConfig.animationPath + AnimationConfig.animationFileName + this.extendZero(index, 4) + '.png'
  }

  extendZero(num, count) {
    let tempString = num.toString();
    while (tempString.length < count) {
      tempString = '0' + tempString;
    }
    return tempString;
  }

}
