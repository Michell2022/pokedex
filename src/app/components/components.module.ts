import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DetailsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DetailsComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
