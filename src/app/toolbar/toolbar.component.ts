import { NavigationModule } from './models/navigation/navigation.module';
import { Component, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  animations: [
    
    trigger('sidebarAni', [
      state('inMiddle', style({
        transform: 'translateX(0%)',
    })),
    transition('* => void', [
      animate(150, style({
        transform: 'translateX(-400px)',
      }))
    ]),
    transition('void => *', [
      style({
        transform: 'translateX(-400px)',
      }),
      animate(150)
    ])
  ]), 
]

})
export class ToolbarComponent {

  navToggle: boolean = false;
  navList: NavigationModule[] = [];

  @Output() pageEvent = new EventEmitter<number>();

  constructor() {
    this.navList.push(new NavigationModule("Startseite", 0, "home"));
    this.navList.push(new NavigationModule("Über mich", 1, "account_circle"));
    this.navList.push(new NavigationModule("Projekte", 2, "rate_review"));
    this.navList.push(new NavigationModule("Lebenslauf", 3, "work"));
  }

  toggle(): void {
    this.navToggle = !this.navToggle;
  }

  sendPage(page: number): void {
    this.toggle();
    this.pageEvent.emit(page);
  }

}
