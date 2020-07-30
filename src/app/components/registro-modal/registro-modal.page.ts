import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro-modal',
  templateUrl: './registro-modal.page.html',
  styleUrls: ['./registro-modal.page.scss'],
})
export class RegistroModalPage implements OnInit {
  formulario_registro
  constructor(private formBuilder:FormBuilder, private login:LoginService, private modalCtrl:ModalController) {
    this.formulario_registro = this.formBuilder.group({
      cpf:[''],
      nome:[''],
      telefone:[''],
      endereco:[''],
      idade:[''],
      positivo:[false],
      gestante_puerpera:[false],
      asma:[false],
      diabetes:[false],
      hipertensao:[false],
      cardiaca:[false],
      avc:[false],
      cancer:[false],
      alzheimer:[false],
      parkinson:[false],
      dpoc:[false],
      fumante:[false],
      email:[''],
      senha:[''],
      status:['Aguardando']
    })
   }

  ngOnInit() {
  }
  realizarRegistro(){
    this.login.fazerCadastro(this.formulario_registro.value).subscribe({
      next:r=>{console.log('enviou',console.log(r))
        this.modalCtrl.dismiss()},
      error:e=>{console.log('erro',e)}
    })
    console.log(JSON.stringify(this.formulario_registro.value))
  }
}
