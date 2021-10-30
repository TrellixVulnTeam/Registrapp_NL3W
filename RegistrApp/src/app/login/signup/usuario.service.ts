import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  listaUsuario: Usuario[]=[
    {
      name: 'User',
      user: 'usuario',
      password: '1234'
    },
  ];
  
  constructor() { }
  getUsuario(usuarioInput: string)
  {
    return {
            ...this.listaUsuario.find(usuario => {return usuario.user === usuarioInput })
           }
  }
  addUsuario(name: string, user: string, password: string)
  {
    this.listaUsuario.push(
      {
        name,
        user,
        password

      }
    );   
  }

}

