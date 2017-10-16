import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

interface LocalEvent {
  name: string;
  value: any;
}

@Injectable()
export class EventManagerService {

  private stream = new Subject<LocalEvent>();

  on(event) {
    return this.stream.filter((value: LocalEvent) => (value.name === event));
  }

  emit(event, value) {
    this.stream.next({
      name: event,
      value: value
    });
  }

}

