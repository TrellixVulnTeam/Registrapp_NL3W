import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ContactosService } from '../contactos.service';

@Component({
  selector: 'app-asistencia-manual',
  templateUrl: './asistencia-manual.page.html',
  styleUrls: ['./asistencia-manual.page.scss'],
})
export class AsistenciaManualPage implements OnInit { 
  contact={
    id: ' ',
    nombre: '',
    apellidos: '',
    email: '',
  };
  
  contactoService: ContactosService;
  campo: string;
  user: string;


  constructor(private router: Router,public toastController: ToastController,
    contactoService: ContactosService) {
      this.contactoService=contactoService;   
     }

  ngOnInit() {
  }
  registrarContacto() {
      
      if(this.validateModel(this.contact)){
        this.contactoService.addContacto(
          this.contact.nombre.valueOf(),
          this.contact.apellidos.valueOf(),
          this.contact.email.valueOf()),
          this.presentToast('Datos registrados correctamente',);
          
      }  
      else
      {
        this.presentToast('Falta completar: '+this.campo);
      }
    

 }
 /**
   * Muestra un toast al usuario (mensaje flotante)
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
  async presentToast(message: string, duration?: number){
    const toast = await this.toastController.create(
      {
        message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
 validateModel(model: any){
  for (var [key, value] of Object.entries(model)) {
    if (value==='') {
      this.campo=key;
      return false;
    }
  }
  return true;
}

}
