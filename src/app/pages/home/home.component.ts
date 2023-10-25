import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  ingresarPokedex() {
    if (this.nombre) {
      localStorage.setItem('nombre', this.nombre);
      this.router.navigate(['/pokedex'])
    } else {
      alert('Ingresa un nombre antes de continuar.');
    }
  }

}
