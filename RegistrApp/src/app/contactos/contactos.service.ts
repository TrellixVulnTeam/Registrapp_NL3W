import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { DataBaseService } from '../servicios/data-base.service';
import { Contacto } from './contacto.model';
@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  listaContactos: Contacto[]= []
  contacto: Contacto;
  db: DataBaseService;

  constructor(db: DataBaseService) { 
    this.db=db;
    
  }

  getDbState()
  {
    return this.db.getDatabaseState();
  }

  getContactos()
  {
    alert('Obtiene contactos ');
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getContactos().subscribe(contactos => {
          this.listaContactos = contactos;
        });
      }
    });
    return this.listaContactos;
  }

  getContacto(idContacto: string): Promise<Contacto>{
    alert('getContacto');

    return this.db.getContacto(idContacto).then(data => {
        this.contacto = data;
        alert('Contacto Obtenido');
        return this.contacto;
        
     });

  }

  addContacto( nombre: string, apellidos: string,email: string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.addContacto(nombre,apellidos,email);
      }
    });
    
  }

  updateContacto(id: string,nombre: string, apellidos: string, email: string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        alert('Actualiza Datos');
        this.db.updateContacto(nombre,apellidos,email,id);
      }
    });
  }

  
  deleteContacto(id: string)
  {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.deleteContacto(id);
      }
    });
  }

}
