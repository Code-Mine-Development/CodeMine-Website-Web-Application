import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[listScrollAnimation]'
})
export class AuditDetailsDirective {

  @HostBinding() set sth(val){console.log(val)};
  constructor() { }

}
