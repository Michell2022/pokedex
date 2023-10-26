import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    DetailsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailsComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
