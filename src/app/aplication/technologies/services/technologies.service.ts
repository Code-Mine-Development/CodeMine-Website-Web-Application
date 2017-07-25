import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Technology } from '../interface/technology.interface';
import 'rxjs/Rx';


const url = 'assets/data/';

@Injectable()
export class TechnologiesService {

  technology:Technology[]
  constructor( private http:Http ) { }

  getTechnologies(){
    return this.http.get(url + 'technologies.json')
      .map(
        (response: Response) => {
          const technology: Technology[] = response.json();
          this.technology = technology;
          return technology;
        })

  }

}
