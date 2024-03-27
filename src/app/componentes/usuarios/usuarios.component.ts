import { Component } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { IUsuario } from '../../modelos/iusuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  usuarios:IUsuario[] = []

  constructor(private usuarioService:UsuariosService) {}


  /* --------- Servicio API RESTfull ---> GET */
  obtenerUsuarios() {
    this.usuarioService.obtener()
      .subscribe((usuarios:IUsuario[]) => {
        console.log(usuarios)
        this.usuarios = usuarios
    })
  }

  /* --------- Servicio API RESTfull ---> POST */
  guardarUsuario() {
    const nuevoUsuario:IUsuario = {
      nombre: "Jimena",
      foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png",
      descripcion: "Este el usuario agregado vía petición asincronica",
      coordenadas: [
        "-22.324",
        "48.4321"
      ],
      comentarios: "Muy buen usuario creado por POST",
      direccion: "CABA 123"
    }

    this.usuarioService.guardar(nuevoUsuario)
      .subscribe( (usuario:IUsuario) => {
        console.log(usuario)

        this.usuarios.push(usuario)
      })
  }

  /* --------- Servicio API RESTfull ---> PUT */
  actualizarUsuario(id:string|undefined) {
    const usuarioEditado:IUsuario = {
      nombre: "Lorena",
      foto: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-256.png",
      descripcion: "Usuario editado vía petición asincronica",
      coordenadas: [
        "-22.324",
        "48.4321"
      ],
      comentarios: "Editado con método PUT",
      direccion: "CABA 456"
    }

    this.usuarioService.actualizar(usuarioEditado, id)
      .subscribe( (usuario:IUsuario) => {
        console.log(usuario)
        /*      0        1       2 */
        /* [ {id: 1}, {id: 2}, {id:3}] */
        const index = this.usuarios.findIndex(user => user.id == usuario.id)
        this.usuarios.splice(index, 1, usuario)
      })

  }

  /* --------- Servicio API RESTfull ---> DELETE */
  borrarUsuario(id:string|undefined) {
    this.usuarioService.borrar(id)
      .subscribe( (usuario:IUsuario) => {
        console.log(usuario) // {}

        const index = this.usuarios.findIndex(user => user.id == id)
        this.usuarios.splice(index, 1)
      })
  }


}
