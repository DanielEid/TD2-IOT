<?php

function initialiseDatabase($addresseBDD){

    $addresseBDD='sqlite:../Model/ESP32.db';

    date_default_timezone_set('UTC');

    try {  //to obtains errors
    
    $bdd = new PDO($addresseBDD);                                //connection ou creation
    $bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);//affichage erreurs   
    

    //CREATE TABLE

    $bdd->exec("CREATE TABLE IF NOT EXISTS luminosite (
        id INTEGER PRIMARY KEY, 
        luminosite INTEGER, 
        'time' INTEGER NOT NULL DEFAULT CURRENT_TIMESTAMP)");   

    $bdd->exec("CREATE TABLE IF NOT EXISTS temperature (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        temperature INTEGER, 
        'time' INTEGER NOT NULL DEFAULT CURRENT_TIMESTAMP)");



        return $bdd;
    }

catch(PDOException $e) {
    echo $e->getMessage();
  }

}

function insert($bdd,$tableName,$nameColumn,$value){
    try{
        $sqlInsert=$bdd->prepare('INSERT INTO "'.$tableName.'" ("id","'.$nameColumn.'") VALUES (:id,:'.$nameColumn.')');
        $sqlInsert->bindValue(':id',NULL);
        $sqlInsert->bindParam(':'.$nameColumn,$value);
        $sqlInsert->execute();
    }
    catch(PDOException $e) {
        echo $e->getMessage();
      }
}

function selectEcho($bdd,$param,$table,$nbrOfRows){ //adaptée seulement a cette application

    $resultsql = $bdd->query('SELECT '.$param.',time FROM "'.$table.'" ORDER BY "id" DESC LIMIT 0, '.$nbrOfRows.'');
    
    foreach($resultsql as $row) {
      echo $param.": " . $row[$param] . "<br>";
      echo "time: " . $row['time'] . "<br>";
      echo "<br><br>";
    }
}

function selectJson($bdd,$param,$table,$nbrOfRows){ //adaptée seulement a cette application

  return  $bdd->query('SELECT '.$param.',time FROM "'.$table.'" ORDER BY "id" DESC LIMIT 0, '.$nbrOfRows.'')->fetchAll(PDO::FETCH_ASSOC);
  //retourne le resultat de l'instruction SQL sous forme de tableau
  }

?>