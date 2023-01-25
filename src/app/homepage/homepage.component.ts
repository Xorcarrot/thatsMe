import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [

    trigger('textswithing', [
      state('inMiddle', style({
        opacity: 1,
        transform: 'translateY(0%)',
      })),
      transition('* => void', [
        animate(1000, style({
          transform: 'translateY(70px)',
          opacity: 0,
        }))
      ]),
      transition('void => *', [
        style({
          transform: 'translateY(-70px)',
          opacity: 0
        }),
        animate(1000)
      ])
    ]),
  ]
})
export class HomepageComponent implements OnInit {

  startTexts: string[] = [];
  welcomeText: string = '';
  indexText: number = 0;

  cols: number = 2;

  constructor() {
    this.startTexts.push("Web-Developer in Ausbildung");
    this.startTexts.push("Herzlich willkommen!");
    this.startTexts.push("Patrick Pußwald");
  }

  ngOnInit(): void {
    this.switchingText();
    setInterval(() => {
      this.switchingText();
    }, 5000);
    this.cols = (window.innerWidth <= 480) ? 1 : 2;
  }

  switchingText(): void {
    this.welcomeText = this.startTexts[this.indexText];
    if(this.indexText > 1) {
      this.indexText = 0;
    } else {
      this.indexText++;
    }
  }

  handleSize(event: any) {
    this.cols = (event.target.innerWidth <= 480) ? 1 : 2;
  }

}
