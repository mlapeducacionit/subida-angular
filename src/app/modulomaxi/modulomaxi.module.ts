import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './componentes/panel/panel.component';
import { ContenidoComponent } from './componentes/contenido/contenido.component';


@NgModule({
  declarations: [
    PanelComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule
  ],
  /* En exports. Acá coloco el componente que voy a querer consumir cuando importe el modulo en app */
  exports: [
    PanelComponent
  ]
})
export class ModulomaxiModule { }
