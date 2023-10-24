import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailsComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
