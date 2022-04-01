import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServicepersonaService } from 'src/app/Service/servicepersona.service';
import { PersonaModel } from 'src/app/Models/PersonaModel';
import { ServicegeneroService } from 'src/app/Service/servicegenero.service';
import { GeneroModel } from 'src/app/Models/GeneroModel';
import { EstadoModel } from 'src/app/Models/EstadoModel';
import { ServiceestadoService } from 'src/app/Service/serviceestado.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

  persona:PersonaModel = new PersonaModel;

  //Se llenan los Select del Formulario:
  public selectedGenero: GeneroModel = {idGenero: 0, nombreGenero: ''};
  generos:GeneroModel[];
  public selectedEstado: EstadoModel = {idEstado: 0, nombreEstado: ''};
  estados: EstadoModel[];

  //Dos variables una la ruta y el otro el servicio
  constructor(private router:Router, private service:ServicepersonaService, private serviceuno:ServicegeneroService, private servicedos:ServiceestadoService) { }

  ngOnInit(): void {
    this.serviceuno.getGenero()
    .subscribe(data=>{
      this.generos=data;
    })
    this.servicedos.getEstado()
    .subscribe(data=>{
      this.estados=data
    })
  }

  create():void{
    this.selectedGenero.idGenero
    this.selectedGenero.nombreGenero
    console.log(this.selectedGenero.idGenero);
    console.log(this.selectedGenero.nombreGenero);
    console.log(this.persona);
  }

  GuardarPersona(){    
    console.log(this.persona);    
    //persona.genero.idGenero = this.selectedGenero.idGenero;
    //persona.genero.nombreGenero = "";
    //persona.estado.idEstado = this.selectedEstado.idEstado;    
    //persona.estado.nombreEstado = "";  


    //mobjPersona:PersonaModel = new PersonaModel;

   this.service.crearPersona(this.persona)
    .subscribe(data=>{
      alert("Se agrego con exito el Usuario... !!!");
      this.router.navigate(["listarpersona"]);
    })
  }
}
