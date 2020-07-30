import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from 'src/app/components/login-modal/login-modal.page';
import { RegistroModalPage } from 'src/app/components/registro-modal/registro-modal.page';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login
  constructor(public modalController:ModalController, public formBuilder:FormBuilder, private loginService:LoginService, private router:Router) { 
    this.login = this.formBuilder.group({
      cpf:[''],
      senha:['']
    })
  }

  ngOnInit() {
  }
  async presentModal(){
    const modal = await this.modalController.create({
      component:LoginModalPage
    })
    return await modal.present()
  }
  async presentModalR(){
    const modal = await this.modalController.create({
      component:RegistroModalPage
    })
    return await modal.present()
  }
  realizarLogin(){
    this.loginService.fazerLogin(this.login.value).subscribe({
      next:(r:any)=>{
        console.log(r.token)
        localStorage.setItem('token',r.token)
        this.router.navigate(['/tabs'])
      },
        error:e=>{console.log(e)}
    })

  }
}
