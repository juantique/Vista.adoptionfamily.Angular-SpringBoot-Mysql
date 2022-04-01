import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EstadoModel } from '../Models/EstadoModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceestadoService {

  //Desde el constructor se utiliza la clase HttpClient quien se encargara de hacer la conexion al proyecto backend
  constructor(private http:HttpClient) { }

  //URL hace referencia al proyecto backend:
  Url='http://localhost:8080/api/estado';

  //Modeto Get Listar Genero:
  getEstado(){
    return this.http.get<EstadoModel[]>(this.Url);
  }
}
