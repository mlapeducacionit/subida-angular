import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})

export class BindingComponent {
  // Atributos
  public mensaje:string = 'Hola mundo!'
  valor1 = 345
  valor2 = 888
  contador = 0
  valor3 = 222
  valor4 = 111

  // Métodos
  modificar(e:any) {
    // console.log(e)
    let valor = e.target.value
    console.log(valor)

    this.valor3 = valor

  }

}
