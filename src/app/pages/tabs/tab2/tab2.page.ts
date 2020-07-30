import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
formulario_acompanhamento
  constructor(private formBuilder:FormBuilder, private acompanhamento:AcompanhamentoService) {
    this.formulario_acompanhamento = this.formBuilder.group({
      dia : [null],
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
   
  ngOnInit() {
    
  }
  enviarForm(){
    let temporario = this.formulario_acompanhamento.value.dia.slice(0,10)
    this.formulario_acompanhamento.patchValue({dia:temporario})
    console.log(JSON.stringify(this.formulario_acompanhamento.value))
    this.acompanhamento.enviarRelatorio(this.formulario_acompanhamento.value).subscribe({
      next:r=>{console.log('enviou',r)},
      error:e=>{console.log('erro',e)}
    })
    console.log(this.formulario_acompanhamento.value)
  }
}
