import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonColors } from 'src/app/components/colors/colors.component';
import { PokemonesService } from 'src/app/services/pokemones.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit{

  originalPokemons: any[] = [];
  filteredPokemons: any[] = [];
  searchTerm = '';
  page = 1;
  noPokemonFound = false;
  nombre!: string;


  constructor(private pokemonesService: PokemonesService, private router:Router) {}

  ngOnInit(): void {
    this.getPokemons();

    const nombreGuardado = localStorage.getItem('nombre');
    if (nombreGuardado) {
      this.nombre = nombreGuardado;
    }
  }

  getPokemons(): void {
    for (let i = 1; i <= 500; i++) {
      this.pokemonesService.getPokemones(i).subscribe(
        res => {
          const pokemonInfo = {
            position: i,
            id: res.id,
            image: res.sprites.other.dream_world.front_default,
            name: res.name,
            experiencia: res.base_experience,
            tipoPoke: res.types[0].type.name
          };

          this.originalPokemons.push(pokemonInfo);
          this.originalPokemons.sort((a, b) => a.id - b.id);
          this.filterPokemons();
        },
        err => {
          console.error(err);
        }
      );
    }
  }


  filterPokemons(): void {
    if (this.searchTerm === '') {
      this.filteredPokemons = [...this.originalPokemons];
    } else {
      this.filteredPokemons = this.originalPokemons.filter(pokemon =>
        pokemon.name.toLowerCase().startsWith(this.searchTerm.toLowerCase())
      );
    }
    this.page = 1;
    this.noPokemonFound = this.filteredPokemons.length === 0 && this.searchTerm !== '';
  }

  search(): void {
    this.noPokemonFound = false;
    this.filterPokemons();
  }

  sendData(): void {

    const searchTermLower = this.searchTerm.toLowerCase();

    const selectedPokemon = this.originalPokemons.find(pokemon =>
      pokemon.name.toLowerCase() === searchTermLower
    );

    if (selectedPokemon) {
      this.router.navigate(['details', selectedPokemon.id]);
    } else {
      this.noPokemonFound = true;
    }
  }

  seleccionarPokemon(pokemon: any): void {
    this.searchTerm = pokemon.name;
    this.filterPokemons();
  }

  getTextColor(tipoPoke: string): string {
    return PokemonColors[tipoPoke.toLowerCase()] || 'white';
  }

}
