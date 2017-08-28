import {
  Component, OnInit, Input, ViewContainerRef, ComponentFactoryResolver, ComponentFactory,
  ComponentRef, OnDestroy, EventEmitter, Output
} from '@angular/core';
import {Portfolio} from '../../aplication/portfolio/interfaces/portfolio.interface';
import {PortfolioDetailsHeaderComponent} from './details-section/header/header.component';
import {ImageComponent} from './details-section/image/image.component';
import {TextComponent} from './details-section/text/text.component';
import {ImagesComponent} from './details-section/images/images.component';
import {ArchitectureComponent} from './details-section/architecture/architecture.component';
import {IconsComponent} from './details-section/icons/icons.component';
import {TwoImagesComponent} from './details-section/two-images/two-images.component';


@Component({
  selector: 'app-portfolio-details-generator',
  template: ``,
  styles: ['']
})
export class PortfolioDetailsGeneratorComponent implements OnInit, OnDestroy {

  @Input() details: Portfolio;
  @Input() technologies: {};
  @Input() tools: {};
  @Output() navigate = new EventEmitter();

  private refs: [ComponentRef<any>];

  constructor(private container: ViewContainerRef, private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.generate()
  }

  ngOnDestroy() {
    if (!this.refs) {
      return;
    }
    this.refs.forEach((ref: ComponentRef<any>) => {
      ref.destroy();
    });
  }

  generate() {
    this.container.clear();
    this.details.detailsTemplate.forEach((section) => {
      this.generateHeader(section);
      this.generateImage(section);
      this.generateText(section);
      this.generate4images(section);
      this.generateArchitecture(section);
      this.generateIcons(section);
      this.generate2images(section);
    })
  }

  generateHeader(section) {
    if (section.section !== 'header') {
      return;
    }
    const ref: ComponentRef<PortfolioDetailsHeaderComponent> = this.createElement(PortfolioDetailsHeaderComponent);
    ref.instance.logo = this.details.thumbnail;
    ref.instance.title = section.title;
    ref.instance.description = section.description;
  }

  generateImage(section) {
    if (section.section !== 'image') {
      return;
    }
    const ref: ComponentRef<ImageComponent> = this.createElement(ImageComponent);
    ref.instance.image = section.image;
    ref.instance.title = section.title;
    ref.instance.small = section.small;
  }


  generateText(section) {
    if (section.section !== 'text') {
      return;
    }
    const ref: ComponentRef<TextComponent> = this.createElement(TextComponent);
    ref.instance.texts = section.text;
    ref.instance.align = section.align;
  }

  generate4images(section) {
    if (section.section !== '4images') {
      return;
    }
    const ref: ComponentRef<ImagesComponent> = this.createElement(ImagesComponent);
    ref.instance.title = section.title;
    ref.instance.images = section.images;
  }

  generateArchitecture(section) {
    if (section.section !== 'architecture') {
      return;
    }
    const ref: ComponentRef<ArchitectureComponent> = this.createElement(ArchitectureComponent);
    ref.instance.technologies = this.technologies;
    ref.instance.tools = this.tools;
    ref.instance.currentTechnologies = this.details.technologies;
    ref.instance.currentTools = this.details.tools;
    ref.instance.navigate.subscribe((url: string) => {
      this.navigate.emit(url);
    });
  }

  generateIcons(section) {
    if (section.section !== 'icons') {
      return;
    }
    const ref: ComponentRef<IconsComponent> = this.createElement(IconsComponent);
    ref.instance.icons = section.icons;
  }

  generate2images(section) {
    if (section.section !== '2images') {
      return;
    }
    const ref: ComponentRef<TwoImagesComponent> = this.createElement(TwoImagesComponent);
    ref.instance.images = section.images;
  }

  private createElement(elementClass) {
    if (!this.refs) {
      this.refs = <[ComponentRef<any>]>[];
    }

    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(elementClass),
      componentRef: ComponentRef<any> = this.container.createComponent(factory);

    this.refs.push(componentRef);
    return componentRef;
  }

}
