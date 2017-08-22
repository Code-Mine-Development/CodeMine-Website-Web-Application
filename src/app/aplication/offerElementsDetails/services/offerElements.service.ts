import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {OfferElement} from '../interface/offerElement.interface';


const url = 'assets/data/';
const iconDir = 'assets/icons/';

@Injectable()
export class OfferElementsService {

  elements = [];
  stream = new Subject();

  constructor(private http: Http) {
  }

  getData(fileName: string, route: ActivatedRouteSnapshot): Observable<OfferElement> {
    const elementName = route.params.id || null;

    this.getJson(fileName)
      .subscribe((elements) => {
        return this.prepareElement(elements, elementName)
      });

    return this.stream.first();
  }

  getJson(fileName: string) {
    if (this.elements[fileName]) {
      return this.copyObject(fileName);
    }

    return this.http.get(url + fileName + '.json')
      .map(
        (response: Response) => {
          const elements: OfferElement[] = response.json();
          this.elements[fileName] = elements;
          return elements;
        })

  }

  copyObject(fileName: string) {
    return Observable.from([
      Object.assign({}, this.elements[fileName])
    ]);
  }

  prepareElement(elements, elementName: string) {
    const keys = Object.keys(elements);
    let elementIndex = elementName ? keys.findIndex((name) => (name === elementName)) : 0,
      element;

    if (elementIndex < 0) {
      elementIndex = 0;
    }

    element = Object.assign({}, elements[keys[elementIndex]]);
    element.nextUrl = keys[elementIndex + 1] || keys[0];
    element.prevUrl = keys[elementIndex - 1] || keys[keys.length - 1];

    if (element.icon.length === 0) {
      element.icon = {};
      return this.stream.next(element);
    }

    this.getIcon(<string>element.icon).subscribe(
      (iconObj) => {
        element.icon = iconObj;
        this.stream.next(element);
      },
      (e) => {
        element.icon = {url: element.icon};
        this.stream.next(element);
      }
    );
  }

  getIcon(url: string) {
    return this.http.get(iconDir + url)
      .map((response) => ( response.text() ))
      .map((svgBody) => ( svgBody.replace(/fill="[^"]*"/g, '') ))
      .map((svgFile: string) => {
        const m = /<svg.*viewBox="([^"]*)[^>]*>(.*)<\/svg>/g.exec(svgFile);
        if (m != null) {
          return {
            url: url,
            viewBox: m[1],
            svgBody: m[2]
          };
        }
        return {url: url};
      });
  }

}
