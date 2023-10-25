import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from 'src/app/services/pokemones.service';
import { PokemonColors } from '../colors/colors.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  pokemon: any = {}; // Objeto para almacenar los detalles del Pokémon

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonesService: PokemonesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];

      this.pokemonesService.getPokemones(id).subscribe(res => {
        this.pokemon = {
          id: res.id,
          hp: res.stats[0].base_stat,
          hpName: res.stats[0].stat.name,
          image: res.sprites.other.dream_world.front_default,
          name: res.name,
          typeOfPokemon1: res.types[0].type.name,
          typeOfPokemon2: res.types.length > 1 ? res.types[1].type.name : '',
          attack: res.stats[1].base_stat,
          defense: res.stats[2].base_stat,
          speed: res.stats[5].base_stat,
          attackName: res.stats[1].stat.name,
          defenseName: res.stats[2].stat.name,
          speedName: res.stats[5].stat.name
        };
      },
        err => {
          console.log(err);
        }
      );
    });
  }


  getTextColor(typeOfPokemon: string): string {
    if (typeOfPokemon && typeOfPokemon.toLowerCase) {
      return PokemonColors[typeOfPokemon.toLowerCase()] || 'white';
    } else {
      return '';
    }

  }
}
