import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {caminho_api,httpOptions, caminho_api_cadastro} from '../global/api'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  fazerLogin(dados){
    return this.http.post(caminho_api,dados,httpOptions)
  }
  fazerCadastro(dados){
    return this.http.post(caminho_api_cadastro,dados,httpOptions)
  }
}
