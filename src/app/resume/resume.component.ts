import { Component, OnInit } from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false}
    }
  ]
})
export class ResumeComponent implements OnInit {

  stepperOrientation: Observable<StepperOrientation>;
  show: boolean = true;

  constructor(breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver.observe('(min-width: 800px').pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
    this.show = (window.innerWidth <= 480) ? false : true;
  }

  handleSize(event: any) {
    this.show = (event.target.innerWidth <= 480) ? false : true;
  }

}
