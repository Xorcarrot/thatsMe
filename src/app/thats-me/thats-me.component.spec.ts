import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThatsMeComponent } from './thats-me.component';

describe('ThatsMeComponent', () => {
  let component: ThatsMeComponent;
  let fixture: ComponentFixture<ThatsMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThatsMeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThatsMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
