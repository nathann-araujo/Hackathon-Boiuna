import {HttpHeaders} from "@angular/common/http"

export const caminho_api = "http://xibata.atwebpages.com/login.php"
export const caminho_api_cadastro = "http://xibata.atwebpages.com/cadastro.php"
export const caminho_api_sintomas = "http://xibata.atwebpages.com/sintomaspositivo.php"
export const caminho_api_situacao = "http://xibata.atwebpages.com/situacao.php"
export const caminho_api_suspeito = "http://xibata.atwebpages.com/sintomassuspeito.php"
export const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type': 'application/json'
    })
    
    
}
export function getHeader(){
    let httpOptions={
        headers:new HttpHeaders({
            'Token': localStorage.getItem('token')
            
        })
    }
        console.log(localStorage.getItem('token'))
        return httpOptions
}