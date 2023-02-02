import { Project } from './project/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Project[] = [];
  cols: number = 6;
  format: string = "1:1"

  constructor() {
    this.projects.push(new Project("Mitify", "Ticketsystem für Fehlermeldungen. Projekt ist derzeit in Arbeit.", "https://xorcarrot.github.io/mitify/", "https://github.com/Xorcarrot/mitify"));
    this.projects.push(new Project("Fallstudie", "Kurierdienstverwaltung zum tracken von Packeten und deren Status.", "", "https://github.com/Xorcarrot/fallstudie_IPWA02"));
    this.projects.push(new Project("Playground", "Mein Bereich mit dem ich Frontendentwicklung lerne. Nur Desktop!", "", "https://github.com/Xorcarrot/lerningAngular"));
    this.projects.push(new Project("Tic Tac Toe", "Im Zuge dieser Übung habe ich mich mit Java auseinandergesetzt.", "", "https://github.com/Xorcarrot/TicTacToe"));
  }

  ngOnInit(): void {
    this.cols = (window.innerWidth <= 1700) ? 
      (this.cols = (window.innerWidth <= 1400) ? 
        (this.cols = (window.innerWidth <= 1130) ? 
          (this.cols = (window.innerWidth <= 850) ? 
            (this.cols = (window.innerWidth <= 570) ? 1 : 2) : 3) : 4) : 5) : 6;
  }

  handleSize(event: any) {
    this.cols = (event.target.innerWidth <= 1700) ? 
      (this.cols = (event.target.innerWidth <= 1400) ? 
        (this.cols = (event.target.innerWidth <= 1130) ? 
          (this.cols = (event.target.innerWidth <= 850) ? 
            ((this.cols = (event.target.innerWidth <= 570) ? 1 : 2)) : 3) : 4) : 5) : 6;
    
    this.format = (event.target.innerWidth <= 570) ? (this.format = (event.target.innerWidth <= 400) ? "1:1" : "1:0.6") : "1:1";
    
  }

}
