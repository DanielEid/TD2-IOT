<?php

//session_start();



//Fonctions


function changeLedState($stateLed){
	if($stateLed)
		echo "on"; //TODO
	else if(!$stateLed)
		echo "off";	//TODO
}

function esp32Connection($ip){
	return true; //TODO
}



function getBDDData(){
	//TODO
	return array("temp" => array(5,45,6,9),"time" => array("18.02:13","18.02:14","18.02:15","18.02:16"));

}

function getPhotoReceptorValues(){
	return json_encode(getBDDData());
} 


//Variables	
	
///////TMP TEST////////
//$_POST['method']=3;
//////////////

	if (isset($_POST['ip']))
		$ip=$_POST['ip'];

	if (isset($_POST['method'])){
		$method=$_POST['method']; 

	

//Script


		switch ($method) {

			case 1:
				if(esp32Connection($ip))
					echo "true";
				else
					echo "false";
			break;	

			case 2:		
				changeLedState(true);
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