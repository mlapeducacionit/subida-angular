import { Routes } from '@angular/router';
import { BindingComponent } from './componentes/binding/binding.component';
import { EstructuraComponent } from './componentes/estructura/estructura.component';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { PanelComponent } from './modulomaxi/componentes/panel/panel.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', redirectTo: 'binding', pathMatch: 'full' }, // /
  { path: 'binding', component: BindingComponent }, // /binding
  { path: 'estructura', component: EstructuraComponent }, // -> /estructura
  { path: 'atributos', component: AtributosComponent }, // -> /atributos
  { path: 'formularios', component: FormulariosComponent }, // -> /formularios
  { path: 'panel', component: PanelComponent }, // -> /panel
  { path: 'clientes', component: ClientesComponent }, // -> /clientes
  { path: 'usuarios', component: UsuariosComponent }, // -> /usuarios
  { path: '**', redirectTo: 'formularios'}
  /* { path: '**', component: NoEncontradoComponent } */
];
