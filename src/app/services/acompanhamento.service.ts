import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {caminho_api_sintomas,getHeader, caminho_api_situacao,caminho_api_suspeito} from '../global/api'

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService {

  constructor(public http: HttpClient) { }

  enviarRelatorio(dados){
    return this.http.post(caminho_api_sintomas,dados,getHeader())
  }
  enviarRelatorioS(dados){
    return this.http.post(caminho_api_suspeito,dados,getHeader())
  }
  verSituacao(){
    return this.http.get(caminho_api_situacao,getHeader())
  }
}
