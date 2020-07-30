<?php
	class Conexao{
		function Conectar($host,$usuario,$senha,$bdnome){
			try{
				$pdo = new PDO("mysql:host=$host;dbname=$bdnome",$usuario,$senha);
			}catch(PDOException $e){				
				echo "<h3 align='center'>".$e->getMessage()."</h3>";
			}
			return $pdo;
		}
	}