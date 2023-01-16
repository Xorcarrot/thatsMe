import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thatsMe';
  page!: number;

  receiveMessage($event: number) {
    this.page = $event;
  }
}
