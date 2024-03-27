import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BindingComponent } from './componentes/binding/binding.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModulomaxiModule } from './modulomaxi/modulomaxi.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ClientesService, ClientesServiceUseClass } from './servicios/clientes.service';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';

// Decorador
@NgModule({
  /* Decleraciones: Componentes las directivas quiera que sean parte del modulo */
  declarations: [
    AppComponent,
    BindingComponent,
    EstructuraComponent,
    AtributosComponent,
    FormulariosComponent,
    ResaltarDirective,
    NavbarComponent,
    ClientesComponent,
    UsuariosComponent
  ],
  /* Importaciones comunes a los componentes declarados */
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModulomaxiModule,
    RouterModule.forRoot(routes), // <-- Para incomporar a nuestra aplicación el ruteador.
    HttpClientModule // <- Tengo que incorporar el httpClienteModule para que funcione el servicio
  ],
  /* Para incorporar al módulo un servicio utilizo la propiedad providers */
  providers: [
    /* ClientesService */
    /* --------- useClass ------------ */
    { provide: ClientesService, useClass: ClientesServiceUseClass }
  ],
  bootstrap: [AppComponent] // Componente raíz de nuestra aplicación. componente arranque
})
export class AppModule { }
