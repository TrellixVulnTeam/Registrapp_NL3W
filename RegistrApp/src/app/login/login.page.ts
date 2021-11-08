import { UsuarioService } from './signup/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from './signup/usuario.model';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user={
    usuario:'',
    password:''
  };
 usuarioServic: Usuario;  
 campo:string;
 usuario: string;
  constructor(private sqLite: SQLite,private router: Router,private toastController: ToastController,
    private usuarioService: UsuarioService) { } 
  ngOnInit(){
  }
  ingresar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user:this.user
      }
    };
    
    if(this.validateModel(this.user)){
      let usuarioObtenido= this.usuarioService.getUsuario(this.user.usuario);
      usuarioObtenido.then( res=>{
        
        if( res.pass === this.user.password){
          this.router.navigate(['/home'],navigationExtras);
        }else{
          this.presentToast('Usuario o contraseña no validos');
        }

      }).catch(function(e){
        alert('Usuario no registrado');
      });
    }
    else{
      this.presentToast('Falta completar campo: '+ this.campo);
    }
    
  }
   /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */ 
    async presentToast(message : string, duration?:number){
      const toast = await this.toastController.create(
        {
          message:message,
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