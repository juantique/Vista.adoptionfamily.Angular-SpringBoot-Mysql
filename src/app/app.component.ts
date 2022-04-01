import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AplicationFamilyCrud';

  //Crea un Constructor y dentro de ella una variable para el enrutamiento:
  constructor(private router:Router){  }

  //Metodo de Listar Persona (Redireccionamiento):
  ListarPersona(){
    this.router.navigate(["listarpersona"]);
  }
  //Metodo de Agregar Persona (Redireccionamiento):
  CrearPersona(){
    this.router.navigate(["agregarpersona"]);
  }
}
