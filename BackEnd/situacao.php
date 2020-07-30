<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-type: application/json; charset=utf-8");

include ("./conexao.php");

$con = new Conexao();
$pdo = $con->Conectar("fdb29.awardspace.net","3523778_xibata","laranja10","3523778_xibata");


$headers = getallheaders();
$token = $headers["Token"];

$part = explode(".",$token);
$header = $part[0];
$payload = $part[1];
$signature = $part[2];
        
$valid = hash_hmac('sha256',"$header.$payload",'xibata',true);
$valid = base64_encode($valid);

$id_usuario = json_decode(base64_decode($payload),true)["id"];

$msg = "\"Requisição com falha!\"";
$posicao = null;
$pontos = null;

if(base64_decode($signature) == base64_decode($valid)){

        $query = "select * from usuario_in_dia where usuario_id_usuario=:id_usuario"; 
        $insere = $pdo->prepare($query);
        $insere->bindValue(":id_usuario",$id_usuario,PDO::PARAM_INT);
        $foi = $insere->execute();
        $result = $insere->fetchAll();
        $id_dia= $result[0]["dia_id_dia"];
        $pontos= $result[0]["soma_pontos"];


        $query2 = "select count(*) from usuario_in_dia where soma_pontos>:pontos and (select positivo from usuario where id_usuario=usuario_id_usuario)=0"; 
        $insere2 = $pdo->prepare($query2);
        $insere2->bindValue(":pontos",$pontos,PDO::PARAM_INT);
        $foi2 = $insere2->execute();
        $posicao = $insere2->fetchColumn();

        if($foi){
                $msg = "Requisição com sucesso!";
        }
        
}

$retorno = array('msg' => $msg, 'posicao' => $posicao+1 , 'pontos'=> $pontos);
echo json_encode($retorno);

?>