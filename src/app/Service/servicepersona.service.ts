import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PersonaModel } from '../Models/PersonaModel';

@Injectable({
  providedIn: 'root'
})
export class ServicepersonaService {


  //Desde el constructor se utiliza la clase HttpClient quien se encargara de hacer la conexion al proyecto backend
  constructor(private http:HttpClient ) { }

  //URL hace referencia al proyecto backend:
  Url='http://localhost:8080/api/persona';

  //Metodo Get (Listar Persona):
  getPersonas(){
    return this.http.get<PersonaModel[]>(this.Url);
  }

  //Metodo Post (Crear Persona)
  crearPersona(persona:PersonaModel){
    return this.http.post<PersonaModel>(this.Url, persona);
  }

}
