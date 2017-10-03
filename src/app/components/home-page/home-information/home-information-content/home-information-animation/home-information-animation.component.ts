import {Component, OnInit, Renderer2} from '@angular/core';
import {ScrollController} from '../../../services/scroll.controller';
import {AnimationConfig} from '../../../animation.config';

@Component({
  selector: 'app-home-information-animation',
  templateUrl: './home-information-animation.component.html',
  styleUrls: ['./home-information-animation.component.scss']
})
export class HomeInformationAnimationComponent implements OnInit {

  private scrollSubscriber;
  private loadingList = [];
  private visible = 0;
  private maxLoadingQuantity = 8;
  private loadingQuantity = 0;


  static filesIterator(list) {
    let index = 0,
      func;

    return {
      getFile(fn){
        func = fn;
        func(list[index], index);
      },
      next(){
        index++;
        if (func) {
          func(list[index], index);
        }
      }
    }
  }

  constructor(private scrollControler: ScrollController, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.preloadFrames();
    this.scrollSubscriber = this.scrollControler.getScrollTop().subscribe((section) => {
      this.visible = section.frame;
    });
  }

  preloadFrames() {
    const tempFileLink = [];
    for (let i = 0; i < AnimationConfig.animationFrames + 1; i++) {
      tempFileLink.push(this.getFilePath(i));
    }
    this.loadFiles(tempFileLink);
  }

  loadFiles(list) {
    const iterator = HomeInformationAnimationComponent.filesIterator(list);

    iterator.getFile((file, index) => {
      if (!file) {
        return;
      }
      this.loadingQuantity++;
      if (this.loadingQuantity < this.maxLoadingQuantity) {
        iterator.next();
      }
      this.loadFile(file, () => {
        console.log('loaded :' + index);
        this.loadingList[index] = file;
        iterator.next();
      });
    })
  }

  loadFile(file, cb) {
    console.log('startSubscribe');

    const element = this.renderer.createElement('img');
    this.renderer.listen(element, 'load', () => {
      this.loadingQuantity--;
      cb();
    });
    this.renderer.setProperty(element, 'src', file);
    console.log('startLoading : ' + file);
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
