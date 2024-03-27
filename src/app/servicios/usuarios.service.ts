import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../modelos/iusuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //private url:string = 'http://localhost:8080/usuarios/'
  private url:string = 'https://615d8b5212571a00172076ba.mockapi.io/usuarios/'

  constructor(private httpClient:HttpClient) { }

  // GET
  obtener() {
    return this.httpClient.get<IUsuario[]>(this.url) /* Me retorna un observable */
  }
  // POST
  guardar(usuario:IUsuario) {
    return this.httpClient.post<IUsuario>(this.url, usuario)
  }
  // PUT
  actualizar(usuario:IUsuario, id:string|undefined) {
    return this.httpClient.put<IUsuario>(this.url+id, usuario)
  }
  // DELETE
  borrar(id:string|undefined) {
    return this.httpClient.delete<IUsuario>(this.url+id)
  }

}
