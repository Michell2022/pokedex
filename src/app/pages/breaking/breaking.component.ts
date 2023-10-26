import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breaking',
  templateUrl: './breaking.component.html',
  styleUrls: ['./breaking.component.css']
})
export class BreakingComponent {

  constructor(private router:Router){}

  volver(){
    this.router.navigate(['/home']);
  }
}
