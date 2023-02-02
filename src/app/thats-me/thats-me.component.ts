import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thats-me',
  templateUrl: './thats-me.component.html',
  styleUrls: ['./thats-me.component.css']
})
export class ThatsMeComponent implements OnInit {

  indexText: number = 0;
  cols: number = 4;
  tile: number = 2;
  row: number = 2;
  imgRow : number = 3;
  format: string = "2:1.4";

  ngOnInit(): void {
    this.cols = (window.innerWidth <= 480) ? 1 : 4;
    this.tile = (window.innerWidth <= 480) ? 1 : 2;
    this.format = (window.innerWidth <= 480) ? "1:1" : "2:1.4";
    this.row = (window.innerWidth <= 480) ? 1 : 2;
    this.imgRow = (window.innerWidth <= 480) ? 1 : 3;
  }

  handleSize(event: any) {
    this.cols = (event.target.innerWidth <= 480) ? 1 : 4;
    this.tile = (event.target.innerWidth <= 480) ? 1 : 2;
    this.format = (event.target.innerWidth <= 480) ? "1:1" : "2:1.4";
    this.row = (event.target.innerWidth <= 480) ? 1 : 2;
    this.imgRow = (event.target.innerWidth <= 480) ? 1 : 3;
  }

}
