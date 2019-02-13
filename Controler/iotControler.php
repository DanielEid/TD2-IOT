<?php
//Fonctions


function changeLedState($stateLed){
	/*if($stateLed)
		echo "true"; //TODO
	else if(!$stateLed)
		echo "false";	//TODO*/
		echo $stateLed;  //indique l'état de la led
}

function esp32Connection($ip){
	return true; //TODO
}


function getPhotoReceptorValues(){
	return json_encode(selectJson($GLOBALS['bdd'],'luminosite','luminosite',10));	
} 


	require_once '../Model/databaseModel.php';

	if (isset($_POST['ip']))
		$ip=$_POST['ip'];

	if (isset($_POST['method'])){
		$method=$_POST['method']; 

	if(empty($GLOBALS['bdd']))
		$GLOBALS['bdd']=initialiseDatabase('sqlite:ESP32.db');

	

//Script


		switch ($method) {  //Récupere la valeur passée en post depuis le javascript, permet de savoir quel méthode utiliser pour quelle fonctionalitée.

			case 1:
				if(esp32Connection($ip))
					echo "true";
				else
					echo "false";
			break;	

			case 2:		
				changeLedState(false);
			break;

			case 3:
			  echo getPhotoReceptorValues();
			break;

			default:
				echo "error";
			break;
		}
			
	
	}

	else echo "error: method post doesn't working";


?>