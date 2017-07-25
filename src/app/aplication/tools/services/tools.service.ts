import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Tool } from '../interface/tool.interface';
import 'rxjs/Rx';


const url = 'assets/data/';

@Injectable()
export class TechnologiesService {

  technology:Tool[]
  constructor( private http:Http ) { }

  getTechnologies(){
    return this.http.get(url + 'tools.json')
      .map(
        (response: Response) => {
          const technology: Tool[] = response.json();
          this.technology = technology;
          return technology;
        })

  }

}
