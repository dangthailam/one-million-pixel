import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one-million-pixel';
  hidden = false;
  xPos = 0;
  yPos = 0;
  
  pixelSize = 10;
  edge = 100;
  pixelArray = Array(this.edge * this.edge);

  ngOnInit() {
    for (let x = 0; x < this.edge; x++) {
      for(let y = 0; y < this.edge; y++) {
        this.pixelArray[x * this.edge + y] = `${y * this.pixelSize}, ${x * this.pixelSize}, ${y * this.pixelSize + this.pixelSize}, ${x * this.pixelSize + this.pixelSize}`;
      }
    }
  }

  displayDiv(element: string) {
    console.log(element);
  }
}

/*
x1, y1, x2, y2
0 0 10 10
10 0 20 10
*/