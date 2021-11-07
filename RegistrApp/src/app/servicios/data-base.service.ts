import { Platform, AlertController } from '@ionic/angular';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Contacto } from '../contactos/contacto.model';
import { Usuario } from '../login/signup/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  private dbReady = new BehaviorSubject<boolean>(false);
  private dataBase: SQLiteObject;
  private http: HttpClient;
  private sqlPorter: SQLitePorter;
  private sqlite: SQLite;

  listaContactos = new BehaviorSubject([]);
  listaUsuarios = new BehaviorSubject([]);

  private usuario: Usuario;

  private contacto: Contacto;

  constructor(
    http: HttpClient,
    plataforma: Platform,
    sqlite: SQLite,
    sqlPorter: SQLitePorter
  ) {
    //Detectar Plataforma
    
    plataforma
      .ready()
      .then(() => {
        this.sqlite = sqlite;
        this.http = http;
        this.sqlPorter = sqlPorter;
        // Crear o abrir la base de datos DataBaseProyectoUno.db;
        this.sqlite
          .create({
            name: 'DataBaseProyectoUno.db',
            location: 'default',
            createFromLocation: 1,
          })
          .then((db: SQLiteObject) => {
            
            this.dataBase = db;
            this.crearTablas();
            
          })
          .catch((e) => {
            alert('Error conexión');
            console.error(e);
            console.error('Error Conexión ' + e.message);
          });
      })
      .catch((e) => alert('Plataforma no leida.'));
  }
  crearTablas() {
    // Obtener el archivo que contiene las sentencias SQL
    
    this.http
      .get('../assets/db/CreateDataBase.sql', { responseType: 'text' })

      .subscribe((sql) => {
        console.log('--Ejecutar las sentencias SQL del archivo--');
        // Ejecutar las sentencias SQL del archivo
        this.sqlPorter
          .importSqlToDb(this.dataBase, sql)
          .then(async (_) => {
            console.log('--Informar que la base de datos está lista--');
            // Informar que la base de datos está lista
            
            this.cargarContactos();
            
            this.dbReady.next(true);
            
            console.log('--Create database obtenido--');
          })
          .catch((e) => {
            alert('Error al importar la base de datos');
            console.error(e);
            //console.error('Error al importar la base de datos', e.);
          });
      });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }

  getContactos(): Observable<Contacto[]> {
    return this.listaContactos.asObservable();
  }

  cargarContactos() {
    return this.dataBase
      .executeSql('SELECT * FROM contacto', [])
      .then((data) => {
        let contactos: Contacto[] = [];

        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            contactos.push(data.rows.item(i));
          }
        }
        this.listaContactos.next(contactos);
      });
  }

  getContacto(id): Promise<Contacto> {
    return this.dataBase
      .executeSql('SELECT * FROM Contacto WHERE id = ?', [id])
      .then((resSelect) => {
        return {
          id: resSelect.rows.item(0).id,
          nombre: resSelect.rows.item(0).nombre,
          apellidos: resSelect.rows.item(0).apellidos,
          email: resSelect.rows.item(0).email,
        };
      });
  }

  addContacto(nombre, apellidos, email) {
    let data = [nombre, apellidos, email];
    return this.dataBase
      .executeSql(
        'INSERT INTO contacto (nombre, apellidos, email) VALUES (?, ?, ? )',
        data
      )
      .then((res) => {
        this.cargarContactos();
      });
  }
  updateContacto(nombre, apellidos, email, id) {
    alert('Actualiza ' + id);
    let data = [nombre, apellidos, email, id];
    return this.dataBase
      .executeSql(
        'UPDATE contacto SET nombre=?, apellidos=?, email=?, WHERE id=?',
        data
      )
      .then((res) => {
        this.cargarContactos();
      });
  }

  deleteContacto(id) {
    alert('Delete ' + id);
    let data = [id];
    return this.dataBase
      .executeSql('DELETE FROM contacto  WHERE id=?', data)
      .then((res) => {
        this.cargarContactos();
      });
  }
  //Usuarios
  getUsuarios(): Observable<Usuario[]> {
    return this.listaUsuarios.asObservable();
  }

  cargarUsuarios() {
    return this.dataBase
      .executeSql('SELECT * FROM usuario', [])
      .then((data) => {
        let usuarios: Usuario[] = [];

        if (data.rows.length > 0) {
          for (var i = 0; i < data.rows.length; i++) {
            usuarios.push(data.rows.item(i));
          }
        }
        this.listaUsuarios.next(usuarios);
      });
  }

  getUsuario(user): Promise<Usuario> {
    return this.dataBase
      .executeSql('SELECT * FROM usuario WHERE user = ?', [user])
      .then((resSelect) => {
        return {
          id: resSelect.rows.item(0).id,
          name_user: resSelect.rows.item(0).name_user,
          user: resSelect.rows.item(0).user,
          pass: resSelect.rows.item(0).pass
        };
      });
  }

  addUsuario(name, user, password) {
    let data = [name, user, password];
    return this.dataBase
      .executeSql(
        'INSERT INTO usuario (name_user, user, pass) VALUES (?, ?, ? )',
        data
      )
      .then((res) => {
        this.cargarUsuarios();
      });
  }
  updateUsuario(name_user, user, pass, id) {
    
    let data = [name_user, user, pass, id];
    return this.dataBase
      .executeSql(
        'UPDATE usuario SET name_user=?, user=?, pass=? WHERE id=?',
        data
      )
      .then((res) => {
        this.cargarUsuarios();
      });
  }

  deleteUsuario(id) {
    alert('Delete ' + id);
    let data = [id];
    return this.dataBase
      .executeSql('DELETE FROM usuario  WHERE id=?', data)
      .then((res) => {
        this.cargarUsuarios();
      });
  }
}
