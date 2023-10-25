import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

const routes: Routes = [

  { path:'home', component:HomeComponent },
  { path:'pokedex', component:PokedexComponent },
  { path:'details/:id', component:DetailsComponent },
  { path:'**', redirectTo:'home', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
