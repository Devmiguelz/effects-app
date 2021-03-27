import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  ListarUsuarios() {
    return this.http.get(`${environment.URL_API}/users?per_page=6`)
               .pipe(
                 map((result: any) => {
                  return result['data'];
                 })
               );
  }
}
