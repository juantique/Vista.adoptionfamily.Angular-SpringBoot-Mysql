import { GeneroModel } from './../Models/GeneroModel';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicegeneroService {

  //Desde el constructor se utiliza la clase HttpClient quien se encargara de hacer la conexion al proyecto backend
  constructor(private http:HttpClient) { }

  //URL hace referencia al proyecto backend:
  Url='http://localhost:8080/api/genero';

  //Modeto Get Listar Genero:
  getGenero(){
    return this.http.get<GeneroModel[]>(this.Url);
  }
}
