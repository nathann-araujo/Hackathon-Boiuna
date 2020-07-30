<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-type: application/json; charset=utf-8");

include ("./conexao.php");

$con = new Conexao();
$pdo = $con->Conectar("fdb29.awardspace.net","3523778_xibata","laranja10","3523778_xibata");

$post = json_decode(file_get_contents('php://input'));

$query = "select * from usuario where cpf=:cpf and senha=:senha"; 
$insere = $pdo->prepare($query);
$insere->bindValue(":cpf",$post->cpf,PDO::PARAM_STR);
$insere->bindValue(":senha",md5($post->senha),PDO::PARAM_STR);
$foi = $insere->execute();

$n = $insere->rowCount();
$senha = null;
if ($n==1) {	
	$result = $insere->fetchAll();
	$cpf= $result[0]["cpf"];
	$id = $result[0]["id_usuario"];

        $header = [
           'alg' => 'HS256',
           'typ' => 'JWT'
        ];
        $header = json_encode($header);
        $header = base64_encode($header);
        
        $payload = [
           'cpf' => $cpf,
           'id' => $id
        ];
        $payload = json_encode($payload);
        $payload = base64_encode($payload);
        
        $signature = hash_hmac('sha256',"$header.$payload","xibata",true);
        $signature = base64_encode($signature);
        echo "{\"Mensagem\":\"Login realizado com sucesso!\",\"token\":\"$header.$payload.$signature\"}";
}else{
        echo "{\"Mensagem\":\"Falha ao realizar login!\",\"token\":\"0\"}";
}

?>