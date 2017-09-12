export class EventManager {

  private events = [];


  constructor() {
  }

  emit(name, value) {
    if (!this.events[name]) {
      return;
    }
    this.events[name].forEach(
      (callback) => callback(value)
    )
  }

  on(name, cb) {
    if (!this.events[name]) {
      this.events[name] = [cb]
    }
    this.events[name].push(cb);
  }

}
