<?php

//session_start();



//Variables	
	$method=$_POST['method']; 

	if (isset($_POST['ip']))
		$ip=$_POST['ip'];

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

		default:
			echo "error";
			break;
	}
			
	





?>