import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  title: string = 'Usuarios Registrados'

  usuarios: Usuario[];

  /*constructor(){}

  ngOnInit() {
      
  }*/

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(
      usuarios => this.usuarios = usuarios
    );
  }

  delete(usuario: Usuario): void {
    swal({
      title: 'Está seguro?',
      text: `¿Seguro que desea eliminar al usuario ${usuario.nombre}?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonClass: 'btn btn-danger',
      cancelButtonClass: 'btn btn-success',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {

        this.usuarioService.delete(usuario.id).subscribe(
          response => {
            this.usuarios = this.usuarios.filter(usu => usu !== usuario)
            swal(
              'Usuario eliminado',
              `Usuario ${usuario.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
