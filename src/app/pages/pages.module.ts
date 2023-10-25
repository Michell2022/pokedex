import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BreakingComponent } from './breaking/breaking.component';
import { FormsModule } from '@angular/forms';
import { PokedexComponent } from './pokedex/pokedex.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HomeComponent,
    BreakingComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    HomeComponent,
    BreakingComponent
  ]
})
export class PagesModule { }
