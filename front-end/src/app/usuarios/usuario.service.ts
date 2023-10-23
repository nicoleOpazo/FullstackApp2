import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Usuario } from "./usuario";

@Injectable()
export class UsuarioService {

    private apiUrl: string = 'http://localhost:8080/usuarios';
    private endPointGetAll: string = 'http://localhost:8080/usuarios/todos';

    private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<Usuario[]> {
        return this.http.get(this.endPointGetAll).pipe(map(response => response as Usuario[]));
    }

    create(usuario: Usuario): Observable<Usuario> {
        return this.http.post<Usuario>(this.apiUrl, usuario, { headers: this.httpHeaders })
    }

    getUsuario(id): Observable<Usuario> {
        return this.http.get<Usuario>(`${this.apiUrl}/${id}`)
    }

    update(usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario, { headers: this.httpHeaders })
    }

    delete(id: number): Observable<Usuario> {
        return this.http.delete<Usuario>(`${this.apiUrl}/${id}`, { headers: this.httpHeaders })
    }
}