import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suspeita',
  templateUrl: './suspeita.page.html',
  styleUrls: ['./suspeita.page.scss'],
})
export class SuspeitaPage implements OnInit {
  formulario_suspeita
  valores={
    'primeiro':1,
    'segundo':3,
    'terceiro':7,
    'quarto':11
  }
  valores_bool={
    true:true,
    false:false
  }
  constructor(private formBuilder:FormBuilder, private teste:AcompanhamentoService, private router:Router) { 
    this.formulario_suspeita = this.formBuilder.group({
      dia : ['2020-07-29'],
      febre : [false],
      fadiga : [false],
      tosse_seca : [false],
      tosse_persistente : [false],
      espirros : [false],
      dor_corpo : [false],
      coriza : [false],
      dor_garganta : [false],
      dor_cabeca: [false],
      diarreia : [false],
      desidratacao : [false],
      falta_ar : [false],
      emagrecimento : [false],
      sudorese : [false],
      perda_olfato : [false],
      perda_paladar : [false],
      falta_apetite : [false],
      vomito : [false],
      sincope : [false],
      confusao_mental : [false],
      sonolencia_excessiva : [false],
      irritabilidade : [false],
      outro:['']
    })
  }
dados = { "nome":"Teste", "endereco":"lalalala"}
  ngOnInit() {
  }
  fazerRegistro(){
    
    this.teste.enviarRelatorioS(this.formulario_suspeita.value).subscribe({
      next:r=>{console.log("enviado",r)
      this.router.navigate(['/tabs/agendamento'])},
      error:err=>{console.log("falhou")},
    })
  }
  enviarForm(){
    console.log(this.formulario_suspeita.value)
  }
}
