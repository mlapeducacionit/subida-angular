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
    return this.httpClient.get<IUsuarios[]>(this.url) /* Me retorna un observable */
  }
  // POST
  guardar(usuario:IUsuarios) {
    return this.httpClient.post<IUsuarios>(this.url, usuario)
  }
  // PUT
  actualizar(usuario:IUsuarios, id:string|undefined) {
    return this.httpClient.put<IUsuarios>(this.url+id, usuario)
  }
  // DELETE
  borrar(id:string|undefined) {
    return this.httpClient.delete<IUsuarios>(this.url+id)
  }

}
