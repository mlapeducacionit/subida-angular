import { Component } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  clientes:string[] = []
  cliente:string = ''


  constructor(private clienteService:ClientesService) {
    this.clientes = this.clienteService.getClientes()
  }

  agregarCliente(cliente:string):void {
    this.clienteService.agregarCliente(cliente)
  }

}
