import {Injectable} from '@angular/core';

@Injectable()
export class DrawBackgroundService {

  constructor() {
  }

  AuditBackground(canvasRef) {

    // Audit first triangle

    const canvas = canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const triangle = document.getElementById('triangle-head');
    canvas.width = window.innerWidth;
    canvas.height = triangle.offsetHeight;

    ctx.beginPath();

    const r = 1000;
    const theta = 225;

    ctx.moveTo(canvas.width / 4, canvas.height);
    ctx.lineTo(canvas.width / 4 + r * Math.cos(Math.PI * theta / 180.0), canvas.height + r * Math.sin(Math.PI * theta / 180.0));
    ctx.lineTo(0, canvas.height);
    ctx.closePath();

    ctx.fillStyle = '#ffda07';
    ctx.fill();

    const data = canvas.toDataURL();
    const bg1 = document.getElementById('triangle-head');

    bg1.style.backgroundImage = 'url(' + data + ')';

    const image = new Image();
    image.onload = function () {
      ctx.drawImage(this, 0, 0);

    }
  }

  AuditDetailsBackground(canvasRef1, canvasRef2) {

    // Audit second triangle

    const canvas1 = canvasRef1.nativeElement;
    const ctx1 = canvas1.getContext('2d');
    const triangle1 = document.getElementById('triangle0');

    canvas1.width = window.innerWidth;
    canvas1.height = triangle1.offsetHeight;

    const r = 4500;
    const theta = 45;
    const theta2 = 225;

    ctx1.moveTo(0, 0);
    ctx1.lineTo(canvas1.width / 4, 0);
    ctx1.lineTo(canvas1.width / 5 + r * Math.cos(Math.PI * theta / 180.0), r * Math.sin(Math.PI * theta / 180.0));
    ctx1.lineTo(canvas1.width, canvas1.height);
    ctx1.lineTo(canvas1.width / 5, canvas1.height);
    ctx1.lineTo(canvas1.width / 5 + r * Math.cos(Math.PI * theta2 / 180.0), canvas1.height + r * Math.sin(Math.PI * theta2 / 180.0));
    ctx1.closePath();

    ctx1.fillStyle = '#ffda07';
    ctx1.fill();

    const data1 = canvas1.toDataURL();
    const bg1 = document.getElementById('triangle0');

    bg1.style.backgroundImage = 'url(' + data1 + ')';

    const image1 = new Image();
    image1.onload = function () {
      ctx1.drawImage(this, 0, 0);
    };

    // Audit third triangle

    const canvas2 = canvasRef2.nativeElement;
    const ctx2 = canvas2.getContext('2d');
    const triangle2 = document.getElementById('triangle1');

    canvas2.width = window.innerWidth;
    canvas2.height = triangle2.offsetHeight;

    ctx2.moveTo(canvas1.width / 5, 0);
    ctx2.lineTo(canvas1.width / 5 + r * Math.cos(Math.PI * theta / 180.0), r * Math.sin(Math.PI * theta / 180.0));
    ctx2.lineTo(canvas2.width, 0);
    ctx2.closePath();
    ctx2.fillStyle = '#ffda07';
    ctx2.fill();

    const data2 = canvas2.toDataURL();
    const bg2 = document.getElementById('triangle1');

    bg2.style.backgroundImage = 'url(' + data2 + ')';

    const image = new Image();
    image.onload = function () {
      ctx2.drawImage(this, 0, 0);

    }
  }

  PortfolioDetailsBackground(canvasRef, canvasRef2, canvasRef3) {

    // Portfolio Detail Background #1

    const canvas = canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    const triangle = document.getElementById('triangle1');

    canvas.width = window.innerWidth;
    canvas.height = triangle.scrollHeight + 580;

    ctx.beginPath();
    ctx.moveTo(1, 1);
    ctx.lineTo(canvas.width / 3.5, 1);
    ctx.lineTo(canvas.width, canvas.height / 3);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height - canvas.height / 2);
    ctx.closePath(0, 0);
    ctx.fillStyle = '#ffda07';
    ctx.fill();


    const data = canvas.toDataURL();
    const bg1 = document.getElementById('triangle1');

    bg1.style.backgroundImage = 'url(' + data + ')';

    const image = new Image();
    image.onload = function () {
      ctx.drawImage(this, 0, 0);

    };

    // Portfolio Detail  Background #2

    const canvas2 = canvasRef2.nativeElement;
    const ctx2 = canvas2.getContext('2d');
    const triangle2 = document.getElementById('triangle2');

    canvas2.width = window.innerWidth;
    canvas2.height = triangle2.scrollHeight + 580;

    ctx2.beginPath();
    ctx2.moveTo(1, 1);
    ctx2.lineTo(canvas2.width / 3.3, 1);
    ctx2.lineTo(canvas2.width, canvas2.height / 3);
    ctx2.lineTo(canvas2.width, canvas2.height);
    ctx2.lineTo(0, canvas2.height - canvas2.height / 2);
    ctx2.closePath(0, 0);
    ctx2.fillStyle = '#ffda07';
    ctx2.fill();


    const data2 = canvas2.toDataURL();
    const bg2 = document.getElementById('triangle2');

    bg2.style.backgroundImage = 'url(' + data2 + ')';

    const image2 = new Image();
    image2.onload = function () {
      ctx.drawImage(this, 0, 0);

    };

    // Portfolio Detail Background #3

    const canvas3 = canvasRef3.nativeElement;
    const ctx3 = canvas3.getContext('2d');
    const triangle3 = document.getElementById('triangle3');

    canvas3.width = window.innerWidth;
    canvas3.height = triangle3.scrollHeight;

    ctx3.moveTo(1, canvas3.height / 4);
    ctx3.lineTo(canvas3.width, canvas3.height / 4);
    ctx3.lineTo(canvas3.width, canvas3.height / 2);
    ctx3.lineTo(1, canvas3.height - 100);


    ctx3.closePath(0, 0);
    ctx3.fillStyle = '#ffda07';
    ctx3.fill();


    const data3 = canvas3.toDataURL();
    const bg3 = document.getElementById('triangle3');

    bg3.style.backgroundImage = 'url(' + data3 + ')';

    const image3 = new Image();
    image3.onload = function () {
      ctx.drawImage(this, 0, 0);

    }

  }
}
