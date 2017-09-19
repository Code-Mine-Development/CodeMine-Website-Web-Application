import {Injectable} from '@angular/core';
import {Http, Response, ResponseContentType, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ContactFormService {

  private static readonly URL = 'https://uma80bpn0c.execute-api.us-east-1.amazonaws.com/prod/CommunicationGateway';

  constructor(private http: Http) {
  }


  sendContactForm(data): Observable<boolean> {
    if (typeof data.name !== 'string' || typeof data.email !== 'string' || typeof data.message !== 'string') {
      Observable.throw(new Error('error!'));
    }

    return this.http.post(ContactFormService.URL, {
      name: data.name,
      content: data.message,
      email: data.email
    }).map((value) => {
      return true;
    }).catch((err) => {
      // Maybe we could add error message or something
      throw new Error;
    })

  }
}
