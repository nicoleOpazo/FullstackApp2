import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Usuario } from "./usuario";

@Injectable()
export class UsuarioService {

    private urlEndPoint: string = 'http://localhost:8080/usuarios/todos';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<Usuario[]> {
        return this.http.get(this.urlEndPoint).pipe(map(response => response as Usuario[]));
    }

    create(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.urlEndPoint, usuario, { headers: this.httpHeaders })
    }

    getUsuario(id): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`)
    }

    update(usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(`${this.urlEndPoint}/${usuario.id}`, usuario, { headers: this.httpHeaders })
    }

    delete(id: number): Observable<Usuario> {
        return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
    }
}