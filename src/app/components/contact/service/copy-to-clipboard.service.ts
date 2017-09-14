import {Injectable} from '@angular/core';

@Injectable()
export class CopyToClipboardService {

  constructor() {
  }


  copy(text) {
    let textArea = document.createElement("textarea");

    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.right = '100%';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    let success = false;
    try {
      success = document.execCommand('copy');
    } catch (err) {
      console.log('Opps');
    }
    document.body.removeChild(textArea);
    return success;
  }
}
