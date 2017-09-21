import {
  Directive, OnInit, ComponentFactoryResolver, ViewContainerRef, ComponentRef, HostListener,
  NgZone
} from '@angular/core';
import {NgModel} from '@angular/forms';
import {ToolTipComponent} from '../ui-elements/tool-tip/tool-tip.component';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements OnInit {


  private toolTipComponent: ComponentRef<ToolTipComponent>;

  constructor(private ngModel: NgModel,
              private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef,
              private ngZone: NgZone) {

  }

  @HostListener('blur', []) onBlur() {
    this.updateErrors();
  }

  ngOnInit() {

    this.ngModel.valueChanges.subscribe(() => {
      this.updateErrors();
    });

    this.ngModel.formDirective.ngSubmit.subscribe(() => {
      this.updateErrors();
    });

    this.insertComponent();
  }

  updateErrors() {
    if (!this.toolTipComponent || (!this.ngModel.touched && !this.ngModel.formDirective.submitted && this.ngModel.pristine)) {
      return;
    }

    this.toolTipComponent.instance.errors = this.ngModel.errors;

    this.toolTipComponent.changeDetectorRef.detectChanges();

    this.toolTipComponent.instance.ngOnChanges();
  }

  insertComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(ToolTipComponent);

    this.toolTipComponent = this.viewContainerRef.createComponent(factory);

    this.toolTipComponent.changeDetectorRef.detectChanges();

  }
}
