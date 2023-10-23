import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BreakingComponent } from './breaking/breaking.component';



@NgModule({
  declarations: [
    HomeComponent,
    BreakingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
