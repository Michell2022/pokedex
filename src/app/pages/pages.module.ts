import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BreakingComponent } from './breaking/breaking.component';
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from './pokedex/pokedex.component';



@NgModule({
  declarations: [
    HomeComponent,
    BreakingComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    BreakingComponent
  ]
})
export class PagesModule { }
