import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/models';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = []; 
  loading: boolean = false;
  error: any;

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this._usuarioService.ListarUsuarios().subscribe(usuarios => {
      this.usuarios = usuarios;      
    });
  }

}
