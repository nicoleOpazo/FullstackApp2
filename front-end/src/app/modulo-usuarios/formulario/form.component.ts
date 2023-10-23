import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Usuario } from '../usuarios/usuario';
import { UsuarioService } from '../usuarios/usuario.service';
import swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html'
    //styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    title: string = 'Crear Usuario'
    usuario: Usuario = new Usuario()
    formulario: FormGroup

    constructor(
        private usuarioService: UsuarioService,
        private router: Router,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.cargarUsuario();
    }

    cargarUsuario(): void {
        this.activatedRoute.params.subscribe(params => {
            let id = params['id']
            if (id) {
                this.usuarioService.getUsuario(id).subscribe((usuario) => this.usuario = usuario)
            }
        })
    }

    create(): void {
        this.usuarioService.create(this.usuario)
            .subscribe(usuario => {
                this.router.navigate(['/usuarios'])
                swal('Nuevo usuario', `Usuario ${usuario.nombre} creado con éxito!`, 'success')
            });
    }

    update(): void {
        this.usuarioService.update(this.usuario)
            .subscribe(usuario => {
                this.router.navigate(['/usuarios'])
                swal('Usuario Actualizado', `Usuario ${usuario.nombre} actualizado con éxito!`, 'success')
            });
    }
}