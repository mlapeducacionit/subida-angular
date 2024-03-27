import { Component } from '@angular/core';

// Decorador
@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.css'
})

export class AtributosComponent {
  // Atributos/Propiedades
  estado1 = true
  estado2 = true

  colorImportante:string = 'violet'
  colorInicial:string = 'gold'

  // Métodos
  cambiarPropiedad(estado:boolean) {
    return {
      backgroundColor: estado ? 'blue' : 'gold',
      color: estado ? 'white' : 'black',
      padding: estado ? '10px' : '15px',
      'border-radius': '10px'
    }
  }
  cambiarClase(estado:boolean, claseInicial:string, claseFinal:string = 'btn-dark') {
    return {
      btn: true,
      [claseInicial]: estado,
      [claseFinal]: !estado
    }
  }

}
