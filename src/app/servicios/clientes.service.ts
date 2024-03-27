import { Injectable } from '@angular/core';

/* ------------------------------------------------------------ */
/*  Configuración del servicio con useClass */
/* ------------------------------------------------------------ */

export class ClientesServiceUseClass {

  private clientes:string[] = [
    'Juan',
    'José',
    'Jorge',
    'Natalia',
    'Natali',
    'Nadia',
    'Jimena'
  ]

  constructor() { }

  // GETTER
  getClientes():string[] {
    return this.clientes
  }

  agregarCliente(cliente:string):void {
    this.clientes.unshift(cliente)
  }

  borrarCliente():void {
    this.clientes.shift()
  }

}


/* ----------------------------------------------------------- */
/*  Configuración del servicios original                       */
/* ----------------------------------------------------------- */

// Decorador
@Injectable(/* {
  providedIn: 'root'
} */)

export class ClientesService {

  // Atributos o propiedades

  private clientes:string[] = [
    'Juan',
    'José',
    'Jorge',
    'Natalia',
    'Natali',
    'Nadia',
    'Jimena'
  ]

  constructor() { }

  // Métodos
  getClientes():string[] {
    return this.clientes
  }

  agregarCliente(cliente:string):void {
    this.clientes.push(cliente)
  }

  borrarCliente():void {
    this.clientes.pop()
  }

}
