import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  page: number = 0;

  next(): void {
    this.page++;
    if(this.page > 3) {
      this.page = 0;
    }
  }

  back(): void {
    this.page--;
    if(this.page < 0) {
      this.page = 3;
    }
  }

}
