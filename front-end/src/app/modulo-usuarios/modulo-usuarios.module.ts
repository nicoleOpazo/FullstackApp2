import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioService } from './usuarios/usuario.service';


@NgModule({
  declarations: [
    UsuariosComponent
  ],
  imports: [
  ],
  providers: [UsuarioService]
})
export class ModuloUsuariosModule { }
