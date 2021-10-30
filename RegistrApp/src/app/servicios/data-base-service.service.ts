import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Contacto } from '../contactos/contacto.model'

@Injectable({
  providedIn: 'root'
})
export class DataBaseServiceService {

  private dbReady = new BehaviorSubject<boolean>(false);
  private dataBase: SQLiteObject;
  private http: HttpClient;
  private sqlPorter: SQLitePorter;
  private sqlite: SQLite;

  listaContactos = new BehaviorSubject([]);

  private contacto: Contacto;

  constructor( http: HttpClient, plataform: Platform, sqlite: SQLite, sqlPorter: SQLitePorter) {

    alert('Entra a constructor BD');
    this.sqlite=sqlite;
    this.http = http;
    this.sqlPorter = sqlPorter;
    this.sqlPorter=sqlPorter;
      // Crear o abrir la base de datos DataBaseProyectoUno.db;
      this.sqlite.create({
        name: 'DataBaseProyectoUno.db',
        location: 'default',
        createFromLocation: 1
      })
      .then((db: SQLiteObject) => {
        alert('Setea BD y define timeOut a respuesta');
        this.dataBase = db;
        setTimeout(() => {
          this.crearTablas();
         }, 9000)
      ;
        alert('Pasa Seteo BD ');
        }).catch(e =>{
          alert('Error conexión'  );
          console.error(e);
          console.error('Error Conexión '+ e.message);
        });
   

  }
  async crearTablas() {
    // Obtener el archivo que contiene las sentencias SQL
    this.http.get('../assets/db/CreateDatabase.sql',{responseType: 'text'})
    .subscribe(sql => {
      // Ejecutar las sentencias SQL del archivo
      this.sqlPorter.importSqlToDb(this.dataBase, sql)
        .then(async _ => {
          // Informar que la base de datos está lista
          alert('Bd cargarContactos ');
          this.cargarContactos();
          this.dbReady.next(true);
          alert('cargarContactos sin error');
        }).catch(e => {
          alert('Error al importar la base de datos');
          console.error(e);
          console.error('Error al importar la base de datos', e.message);
        });
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

 getContactos(): Observable<Contacto[]>{
          return this.listaContactos.asObservable();
  }

  cargarContactos(){
    return this.dataBase.executeSql('SELECT * FROM contacto', []).then(data => {
      let contactos: Contacto[] = [];

      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
            contactos.push(
              data.rows.item(i));
        }
      }
      this.listaContactos.next(contactos);
    });
  }

  getContacto(id): Promise<Contacto> {
    return this.dataBase.executeSql('SELECT * FROM Contacto WHERE id = ?', [id]).then(resSelect => {
      return {
            id: resSelect.rows.item(0).id,
            nombre: resSelect.rows.item(0).nombre,
            apellidos: resSelect.rows.item(0).apellidos,
            domicilio: resSelect.rows.item(0).domicilio,
            email: resSelect.rows.item(0).email,
            fono: resSelect.rows.item(0).fono
      }
    });
  }
}
