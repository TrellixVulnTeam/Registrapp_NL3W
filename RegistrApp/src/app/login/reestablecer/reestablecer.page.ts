import { Component, OnInit } from '@angular/core';
import { UsuarioService}  from '../signup/usuario.service';
import { Usuario } from '../signup/usuario.model';
import { Router, NavigationExtras,ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {
  user={
    usuario:'',
    password:'',
    confirmaPass : ''
    
  };
  
     
   campo: string;

  constructor(private router: Router,
    private usuarioService: UsuarioService, private toastController: ToastController,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  reestablece(){
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user 
      }
    };
    if(this.validateModel(this.user)){
      
      if(this.user.confirmaPass!=this.user.password)
      {
        
        this.presentToast('Las contraseñas no coinciden');
      }
      else{
          let usuarioObj= this.usuarioService.getUsuario(this.user.usuario);
            usuarioObj.then( res=>{
                this.usuarioService.updateUsuario(res.id,res.name_user,res.user,this.user.password);
                this.presentToast('Contraseña actualizada');
                this.router.navigate(['/login'],navigationExtras);
            }).catch(function(e){
              alert('Usuario no registrado');
            });   
          
      }
    }
    else
    {
      this.presentToast('Falta completar: '+this.campo);
    }
  }

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
  for (const [key, value] of Object.entries(model)) {
    if (value==='') {
      this.campo=key;
      return false;
    }
  }
  return true;
}

}
