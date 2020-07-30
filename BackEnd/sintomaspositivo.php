<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With, token");
header("Content-type: application/json; charset=utf-8");

$headers = getallheaders();
$token = $headers["Token"];

$part = explode(".",$token);
$header = $part[0];
$payload = $part[1];
$signature = $part[2];
        
$valid = hash_hmac('sha256',"$header.$payload",'xibata',true);
$valid = base64_encode($valid);

if(base64_decode($signature) == base64_decode($valid)){
        include ("./conexao.php");
        
        $con = new Conexao();
        $pdo = $con->Conectar("fdb29.awardspace.net","3523778_xibata","laranja10","3523778_xibata");
        
        $post = json_decode(file_get_contents('php://input'));
        
        $nulo = false;
        
        if(!empty($post)){
                foreach ($post as $key => $value) {
                    if($value=="" && gettype($value)!="boolean" && $key!="outro"){$nulo = true; break;}
                }
        }else{
                $nulo = true;
        }
        
        if(!$nulo){
                $query = "insert into dia"; 
                $query = $query."(febre, fadiga, tosse_seca, tosse_persistente, espirros, coriza, dor_garganta, diarreia, dor_cabeca, falta_ar, dor_corpo, emagrecimento, desidratacao, falta_apetite, sincope, confusao_mental, sonolencia_excessiva, irritabilidade, perda_paladar, perda_olfato, sudorese, vomito, dia, outro)";
                $query = $query." values ";
                $query = $query."(:febre, :fadiga, :tosse_seca, :tosse_persistente, :espirros, :coriza, :dor_garganta, :diarreia, :dor_cabeca, :falta_ar, :dor_corpo, :emagrecimento, :desidratacao, :falta_apetite, :sincope, :confusao_mental, :sonolencia_excessiva, :irritabilidade, :perda_paladar, :perda_olfato, :sudorese, :vomito, :dia, :outro);";
                $insere = $pdo->prepare($query);          
                $insere->bindValue(":febre",$post->febre,PDO::PARAM_BOOL);
                $insere->bindValue(":fadiga",$post->fadiga,PDO::PARAM_BOOL);
                $insere->bindValue(":tosse_seca",$post->tosse_seca,PDO::PARAM_BOOL);
                $insere->bindValue(":tosse_persistente",$post->tosse_persistente,PDO::PARAM_BOOL);
                $insere->bindValue(":espirros",$post->espirros,PDO::PARAM_BOOL);
                $insere->bindValue(":coriza",$post->coriza,PDO::PARAM_BOOL);
                $insere->bindValue(":dor_garganta",$post->dor_garganta,PDO::PARAM_BOOL);
                $insere->bindValue(":diarreia",$post->diarreia,PDO::PARAM_BOOL);
                $insere->bindValue(":dor_cabeca",$post->dor_cabeca,PDO::PARAM_BOOL);
                $insere->bindValue(":falta_ar",$post->falta_ar,PDO::PARAM_BOOL);
                $insere->bindValue(":dor_corpo",$post->dor_corpo,PDO::PARAM_BOOL);
                $insere->bindValue(":emagrecimento",$post->emagrecimento,PDO::PARAM_BOOL);
                $insere->bindValue(":desidratacao",$post->desidratacao,PDO::PARAM_BOOL);
                $insere->bindValue(":falta_apetite",$post->falta_apetite,PDO::PARAM_BOOL);
                $insere->bindValue(":sincope",$post->sincope,PDO::PARAM_BOOL);
                $insere->bindValue(":confusao_mental",$post->confusao_mental,PDO::PARAM_BOOL);
                $insere->bindValue(":sonolencia_excessiva",$post->sonolencia_excessiva,PDO::PARAM_BOOL);
                $insere->bindValue(":irritabilidade",$post->irritabilidade,PDO::PARAM_BOOL);
                $insere->bindValue(":perda_paladar",$post->perda_paladar,PDO::PARAM_BOOL);
                $insere->bindValue(":perda_olfato",$post->perda_olfato,PDO::PARAM_BOOL);
                $insere->bindValue(":sudorese",$post->sudorese,PDO::PARAM_BOOL);
                $insere->bindValue(":vomito",$post->vomito,PDO::PARAM_BOOL);
                $insere->bindValue(":dia",$post->dia,PDO::PARAM_STR);
                $insere->bindValue(":outro",$post->outro,PDO::PARAM_STR);
                $foi = $insere->execute(); 
                if($foi){
                        $id_dia = $pdo->lastInsertId(); 
                        $id_usuario = json_decode(base64_decode($payload),true)["id"];
                        $query2 = "insert into usuario_in_dia"; 
                        $query2 = $query2."(usuario_id_usuario, dia_id_dia)";
                        $query2 = $query2." values ";
                        $query2 = $query2."(:usuario_id_usuario, :dia_id_dia);";
                        $insere2 = $pdo->prepare($query2);  
                        $insere2->bindValue(":usuario_id_usuario",$id_usuario,PDO::PARAM_INT);
                        $insere2->bindValue(":dia_id_dia",$id_dia,PDO::PARAM_INT);
                        $foi2 = $insere2->execute(); 
                }
        }
        
        $msg = $foi ? "Sintomas cadastrados com sucesso!" : "Falha no cadastro dos sintomas";
        
        echo "{\"mensagem\":\"".$msg."\"}";
}else{
         echo "{\"mensagem\":\"Autenticacao inválida\"}";
}

?>