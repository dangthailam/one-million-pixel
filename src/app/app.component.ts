import {Component, ElementRef, ViewChild} from '@angular/core';


export class Square {
  constructor(private ctx: CanvasRenderingContext2D) {}

  draw(x: number, y: number, z: number) {
    this.ctx.fillRect(z * x, z * y, z, z);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'one-million-pixel';
  private firstX = 0;
  private firstY = 0;
  private canvasBound!: DOMRect;


  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.canvasBound = this.canvas.nativeElement.getBoundingClientRect();
    this.ctx = this.canvas.nativeElement.getContext('2d')!;


    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, 1000, 1000);


  }

  beginDrawing(event: MouseEvent) {
    console.log(event);
    this.firstX = event.clientX - this.canvasBound.left;
    this.firstY = event.clientY - this.canvasBound.top;

  }

  draw(event: MouseEvent) {
    this.ctx.fillStyle = 'red';
    const x = event.clientX - this.canvasBound.left;
    const y = event.clientY - this.canvasBound.top;
    console.log(x, y);
    this.ctx.fillRect(this.firstX, this.firstY, x - this.firstX, y - this.firstY);
  }

  // hidden = true;
  // xPos = 0;
  // yPos = 0;
  //
  // pixelSize = 10;
  // edge = 100;
  // pixelArray = Array(this.edge * this.edge);
  //
  // ngOnInit() {
  //   for (let x = 0; x < this.edge; x++) {
  //     for(let y = 0; y < this.edge; y++) {
  //       this.pixelArray[x * this.edge + y] = {
  //         value: [y * this.pixelSize, x * this.pixelSize, y * this.pixelSize + this.pixelSize, x * this.pixelSize + this.pixelSize],
  //         coords: `${y * this.pixelSize}, ${x * this.pixelSize}, ${y * this.pixelSize + this.pixelSize}, ${x * this.pixelSize + this.pixelSize}`
  //       };
  //     }
  //   }
  // }
  //
  // displayDiv(element: any) {
  //   this.hidden = false;
  //   this.xPos = element.value[0];
  //   this.yPos = element.value[1];
  // }
}
