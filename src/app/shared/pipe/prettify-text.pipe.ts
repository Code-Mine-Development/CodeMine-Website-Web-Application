import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'prettifyText'
})
export class PrettifyTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return null;
    }
    const tempValue = value.replace(/\s\w{1,2}\s/g, (value) => {
      return ' ' + value.split(' ').join('') + '\xa0';
    });
    return tempValue;
  }

}
