import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaModel } from 'src/app/Models/PersonaModel';
import {ServicepersonaService} from '../../Service/servicepersona.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: PersonaModel[];

  //Se hace referencia al servicio del metodo listar personas (ServicepersonaService) y se enruta la pagina:
  constructor(private service:ServicepersonaService, private router:Router) { }

  ngOnInit(): void {
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

}
