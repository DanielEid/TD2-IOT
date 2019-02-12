<?php

function initialiseDatabase($addresseBDD){

    date_default_timezone_set('UTC');

    try {  //to obtains errors
    
    $bdd = new PDO($addresseBDD);                                //connection ou creation
    $bdd->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);//affichage erreurs   
    

    //CREATE TABLE

    $bdd->exec("CREATE TABLE IF NOT EXISTS luminosite (
        id INTEGER PRIMARY KEY, 
        luminosite INTEGER, 
        'time' INTEGER NOT NULL DEFAULT CURRENT_TIME)");   

    $bdd->exec("CREATE TABLE IF NOT EXISTS temperature (
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        temperature INTEGER, 
        'time' INTEGER NOT NULL DEFAULT CURRENT_TIME)");



        return $bdd;


    //DROP and FILL DB exemple
     // Drop table messages from file db
    //$bdd->exec("DROP TABLE messages");
    // Close file db connection
    // $file_db = null;
    }

catch(PDOException $e) {
    // Print PDOException message
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

    //$sqlInsert=$bdd->prepare('INSERT INTO "luminosite" ("id","luminosite") VALUES (:id,:luminosite)');
    // $sqlInsert->bindValue(':id',NULL);
    // $sqlInsert->bindValue/*bindParam*/(':luminosite',30);
    // $sqlInsert->execute();
}

function selectEcho($bdd,$param,$table,$nbrOfRows){ //adaptée seulement a cette application

    $resultsql = $bdd->query('SELECT '.$param.',time FROM "'.$table.'" ORDER BY "time" DESC LIMIT 0, '.$nbrOfRows.'');
    
    foreach($resultsql as $row) {
      echo $param.": " . $row[$param] . "<br>";
      echo "time: " . $row['time'] . "<br>";
      echo "<br><br>";
    }

    /*$resultsql = $bdd->query('SELECT temperature,time FROM "temperature" ORDER BY "time" DESC LIMIT 0, 10');    
    foreach($resultsql as $row) {
      echo "temperature: " . $row['temperature'] . "\n";
      echo "time: " . $row['time'] . "\n";
      echo "<br><br>";*/
}


/*MAIN*/

//TODO
$bdd=initialiseDatabase('sqlite:ESP32.db');
print_r($bdd);
insert($bdd,'temperature','temperature','666');
selectEcho($bdd,'temperature','temperature',10);













?>