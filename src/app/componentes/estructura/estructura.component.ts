import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrl: './estructura.component.css'
})

export class EstructuraComponent {
  // Atributo/Propiedades
  mostrar = true
  /* personas:Array<string> = [ */
  personas:string[] = [
    'Juan',
    'Pedro',
    'Ramón',
    'José',
    'Matías'
  ]
  // https://www.iconfinder.com/free_icons
  // alumnos:Array<any> = [
  alumnos:any[] = [
    { nombre: 'Juan',      apellido: 'Perez',     edad: 22, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/12_avatar-512.png' },
    { nombre: 'María',     apellido: 'Rodriguez', edad: 24, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-512.png' },
    { nombre: 'Ana',       apellido: 'Alvarez',   edad: 31, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/5_avatar-512.png' },
    { nombre: 'Tomás',     apellido: 'Gutierrez', edad: 28, curso: true, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png' },
    { nombre: 'Rigoberto', apellido: 'Fernandez', edad: 34, curso: false, foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png' },
  ]

  /* -------------------------------------------------------------- */
  /* TRABAJANDO CON EL SERVICIO CLIENTES */
  /* -------------------------------------------------------------- */

  clientes:string[] = []

  /* Método por defecto de las clases */
  constructor(private clienteService:ClientesService) {
    console.log('Se creo el componente')
    this.clientes = this.clienteService.getClientes()
  }

  // Métodos

  borrarCliente() {
    this.clienteService.borrarCliente()
  }

  /* -------------------------------------------------------------- */
  /* -------------------------------------------------------------- */

  agregarAlumno() {
    const alumno:any = {
      nombre: 'Lucrecia',
      apellido: 'Gomez',
      edad: 21,
      curso: false,
      foto: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-512.png'
    }

    this.alumnos.push(alumno)
  }

  borrarAlumno(index:number) {
    console.log('borrarAlumno', index)

    this.alumnos.splice(index, 1)
  }

}

