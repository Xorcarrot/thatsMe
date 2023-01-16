import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  animations: []

})
export class ContainerComponent implements OnInit {

  @Input() page: number = 0;
  currentTime = Date.now();

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if(event.deltaY > 0) {
      this.back();
    } else {
      this.next();
    }
  }

  ngOnInit(): void {
    this.page = 0;
  }

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
