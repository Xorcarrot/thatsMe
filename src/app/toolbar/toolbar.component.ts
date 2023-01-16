import { NavigationModule } from './models/navigation/navigation.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  navToggle: boolean = false;
  navList: NavigationModule[] = [];
  page: Number = 0;

  constructor() {
    this.navList.push(new NavigationModule("Startseite", 0, "home"));
    this.navList.push(new NavigationModule("Über mich", 1, "account_circle"));
    this.navList.push(new NavigationModule("Projekte", 2, "rate_review"));
    this.navList.push(new NavigationModule("Lebenslauf", 3, "work"));
  }

  toggle(): void {
    this.navToggle = !this.navToggle;
  }

  choosePage(page: Number) {
    this.page = page;
  }

}
