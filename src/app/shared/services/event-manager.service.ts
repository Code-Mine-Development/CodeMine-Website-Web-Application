import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class EventManagerService {

  private stream = new Subject();

  emit(event, value) {
    this.stream.next(this.getEvent(event, value));
  }
  on(event) {
    return this.stream.filter((value: any) => (value.e === event))
  }

  private getEvent(name, value) {
    return {
      e: name,
      v: value
    }
  }
}
