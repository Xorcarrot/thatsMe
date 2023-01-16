import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { 
  name: String;
  value: Number;
  icon: String

  constructor(name: String, value: Number, icon: String) {
    this.name = name;
    this.value = value;
    this.icon = icon;
  }
}
