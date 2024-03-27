import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  NgModel,
  Validators
} from '@angular/forms';

import { verificarEspaciosIntermedios } from '../../validadores/espacios.validator';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css'
})

export class FormulariosComponent {

  /* -------------------------------------------- */
  /* Template Driven */
  /* -------------------------------------------- */
  // Propiedades
  form = {
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    password: ''
  }

  /* -------------------------------------------- */
  /* Reactive forms */
  /* -------------------------------------------- */

  f:FormGroup

  /* -------------------------------------------- */
  /* Template Driven */
  /* -------------------------------------------- */

  // Métodos
  enviar(loginForm:NgForm) {
    // console.log('Se envía el form...', this.form)

    //let datos = this.form // una copia (Estoy pasando la referencia)
    let datos = {...this.form} // No es una copia referencia (Es un clono)
    console.log(datos)

    // console.warn(loginForm)
    loginForm.form.reset()
  }

  logNombreControl(nombreControl:NgModel) {
    console.log(nombreControl)
  }

  /* -------------------------------------------- */
  /* Reactive forms */
  /* -------------------------------------------- */

  /* Método especial de las clases (constructor) */
  constructor(private fb: FormBuilder) {
    this.f = fb.group(
      {
        nombre: [
          '', // valor inicial del campo
          Validators.compose(
            [
              Validators.required,
              Validators.minLength(4),
              Validators.maxLength(11),
              verificarEspaciosIntermedios // La referencia de la función
            ]
          )
        ],
        apellido: ['', Validators.required],
        edad: '',
        email: '',
        password: ''
      }
    )
  }

  enviarRf() {
    console.log('Envíe el formulario')
    console.warn(this.f) // Tengo toda la data del formulario
    console.log(this.f.value)
  }

}
