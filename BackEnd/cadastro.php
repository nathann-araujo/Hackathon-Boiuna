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

$nulo = false;

if(!empty($post)){
        foreach ($post as $key => $value) {
            if($value=="" && gettype($value)!="boolean"){$nulo = true; break;}
        }
}else{
        $nulo = true;
}

if(!$nulo){
        $query = "insert into usuario"; 
        $query = $query."(cpf, nome, telefone, endereco, idade, positivo, status, gestante_puerpera, asma, diabetes, hipertensao, cardiaca, avc, cancer, alzheimer, parkinson, dpoc, fumante, senha, email, pontos_doenca)";
        $query = $query." values ";
        $query = $query."(:cpf, :nome, :telefone, :endereco, :idade, :positivo, :status, :gestante_puerpera, :asma, :diabetes, :hipertensao, :cardiaca, :avc, :cancer, :alzheimer, :parkinson, :dpoc, :fumante, :senha, :email, :pontos_doenca);";
        $insere = $pdo->prepare($query);
        $insere->bindValue(":cpf",$post->cpf,PDO::PARAM_STR);
        $insere->bindValue(":nome",$post->nome,PDO::PARAM_STR);
        $insere->bindValue(":telefone",$post->telefone,PDO::PARAM_STR);
        $insere->bindValue(":endereco",$post->endereco,PDO::PARAM_STR);
        $insere->bindValue(":idade",$post->idade,PDO::PARAM_STR);
        $insere->bindValue(":positivo",$post->positivo,PDO::PARAM_BOOL);
        $insere->bindValue(":status","Aguardando",PDO::PARAM_STR);
        $insere->bindValue(":gestante_puerpera",$post->gestante_puerpera,PDO::PARAM_BOOL);
        $insere->bindValue(":asma",$post->asma,PDO::PARAM_BOOL);
        $insere->bindValue(":diabetes",$post->diabetes,PDO::PARAM_BOOL);
        $insere->bindValue(":hipertensao",$post->hipertensao,PDO::PARAM_BOOL);
        $insere->bindValue(":cardiaca",$post->cardiaca,PDO::PARAM_BOOL);
        $insere->bindValue(":avc",$post->avc,PDO::PARAM_BOOL);
        $insere->bindValue(":cancer",$post->cancer,PDO::PARAM_BOOL);
        $insere->bindValue(":alzheimer",$post->alzheimer,PDO::PARAM_BOOL);
        $insere->bindValue(":parkinson",$post->parkinson,PDO::PARAM_BOOL);
        $insere->bindValue(":dpoc",$post->dpoc,PDO::PARAM_BOOL);
        $insere->bindValue(":fumante",$post->fumante,PDO::PARAM_BOOL);
        $insere->bindValue(":senha",md5($post->senha),PDO::PARAM_STR);
        $insere->bindValue(":email",$post->email,PDO::PARAM_STR);
        $pontos = 10*($post->gestante_puerpera+$post->asma+$post->diabetes+$post->hipertensao+$post->cardiaca+$post->avc+$post->cancer+$post->alzheimer+$post->parkinson+$post->dpoc+$post->fumante);
        $insere->bindValue(":pontos_doenca",$pontos,PDO::PARAM_INT);
        $foi = $insere->execute();
}

$msg = $foi ? "\"Cadastrado com sucesso!\"" : "\"Falha no cadastro\"";

echo "{\"mensagem\":".$msg."}";

?>