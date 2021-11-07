import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataBaseService } from '../../servicios/data-base.service';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[]= [];
  usuario: Usuario;
  db: DataBaseService;

  constructor(db: DataBaseService) { 
    this.db=db;
    
  }

  getDbState()
  {
    return this.db.getDatabaseState();
  }

  getUsuarios()
  {
    
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getUsuarios().subscribe(usuarios => {
          this.listaUsuarios = usuarios;
        });
      }
    });
    return this.listaUsuarios;
  }

  getUsuario(usuario: string): Promise<Usuario>{
    

    return this.db.getUsuario(usuario).then(data => {
        this.usuario = data;
        return this.usuario;
        
     });

  }

  addUsuario( name: string, user: string, password: string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.addUsuario(name, user, password);
      }
    });
    
  }

  updateUsuario(id: string, name_user: string, user: string, pass: string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        
        this.db.updateUsuario(name_user, user, pass, id);
      }
    });
  }

  
  deleteUsuario(id: string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.deleteUsuario(id);
      }
    });
  }

}




