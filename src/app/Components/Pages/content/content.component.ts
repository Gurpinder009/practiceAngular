import { Component, OnInit,Input } from "@angular/core";

@Component({
  selector: "app-content",
  template: `
    <div class="mainContainer">
      <div class="counterContainer">
        <h1 class="heading">Counter: {{ counter }}</h1>
        <div class="buttons">
          <button
            class="btn"
            [ngClass]="condition ? 'disabled' : ''"
            (click)="startCounter()"
            [disabled]="condition"
          >
            Start
          </button>
          <button class="btn" (click)="stopCounter()">Stop</button>
          <button class="btn" (click)="resetCounter()">Reset</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .counterContainer {
        margin: 3vh auto;
        border-radius: 1%;
        width: 30%;
        padding: 2em 0;
        border: 1.3px solid rgb(0, 132, 255);
        background-color: rgb(255, 255, 255);
        box-shadow: 1px 2px 10px rgba($color: #000000, $alpha: 0.5);
      }

      .heading {
        text-align: center;
        color: rgb(85, 85, 85);
      }

      .btn {
        border: none;
        color: white;
        background-color: rgb(0, 132, 255);
        padding: 0.5em 1.2em;
        margin: 0 1em;
        border-radius: 5%;
        box-shadow: 1px 1px 3px black;
        cursor: pointer;

        &:active {
          box-shadow: none;
        }
      }

      .disabled {
        cursor: not-allowed;
      }

      .buttons {
        display: flex;
        margin-top: 1.8em;
        justify-content: center;
      }
    `,
  ],
})
export class ContentComponent implements OnInit {
  counter: number;
  condition: boolean;
  timer: any;
  @Input() item = '';

  constructor() {
    this.counter = 0;
    this.condition = false;
    this.timer = 0;
  }

  ngOnInit() {
    // this.startCounter()
  }

  ngOnDestroy() {
    this.stopCounter();
  }

  startCounter() {
    this.condition = true;
    this.timer = setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000);
  }

  resetCounter(): void {
    this.stopCounter();
    this.counter = 0;
  }

  stopCounter() {
    this.condition = false;
    clearInterval(this.timer);
  }
}
