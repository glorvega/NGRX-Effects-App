import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [CommonModule],
  exports: [ListaComponent, UsuarioComponent],
  declarations: [ListaComponent, UsuarioComponent],
  providers: [],
})
export class UsuariosModule {}
