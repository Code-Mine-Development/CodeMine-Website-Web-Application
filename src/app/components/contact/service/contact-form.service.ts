import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class ContactFormService {

  constructor(private http: Http) {
  }


  sendContactForm(data) {
    if (typeof data.name !== 'string' || typeof data.email !== 'string' || typeof data.message !== 'string') {
      return null;
    }

    this.http.post('https://uma80bpn0c.execute-api.us-east-1.amazonaws.com/prod/CommunicationGateway', {
      name: data.name,
      content: data.email,
      email: data.message
    }).subscribe((response: Response) => {
      console.log(response);
    });
    return true;
  }
}
