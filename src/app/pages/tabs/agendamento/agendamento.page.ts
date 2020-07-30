import { Component, OnInit } from '@angular/core';
import { AcompanhamentoService } from 'src/app/services/acompanhamento.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
  teste 
  grau
  escala
  constructor(private acompanhamento:AcompanhamentoService) { }

  ionViewWillEnter(){
    this.verSituacao()
  }
  ngOnInit() {
    let position = 3
    let aux = position/6
    let dia = Math.floor(aux)
    let hora = position%6
    let date = new Date()
    date.setDate(date.getDate()+dia)
    date.setHours(12+hora,0,0)
    console.log(date)
  }
  verSituacao(){
    this.acompanhamento.verSituacao().subscribe({
      next:(r:any)=>{
        console.log('funcionou')
        let posicao = r.posicao
        let aux = posicao/6
        let dia = Math.floor(aux)
        let hora = posicao%6
        let date = new Date()
        date.setDate(date.getDate()+dia)
        date.setHours(12+hora,0,0)
        this.teste = date
        this.grau = r.pontos
        if(this.grau <=10){
          this.escala = "leve"
        }
        else if(this.grau <=90){
          this.escala = "moderada"
        }
        else{
          this.escala = "grave"
        }
      }
    })
  }
}
