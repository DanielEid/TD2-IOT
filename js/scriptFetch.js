
function fetch_connection(element, elementButton) {

  fetch('Controler/iotControler.php', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'include',
    body: "method=" + 1 + "&actionButtonId=" + element.id + "&ip=" + element.value
    /*J'indique la méthode pour qu'il séléctionne les bonnes méthodes sur le controler (ça limite a un seul fichier) le reste sont des parametres nécésaires au bonne fonctionment du code coté serveur*/
  })

    .then((response) => response.text())
    .then((responseText) => {

      if (responseText == "true") {  //Si les méthodes coté serveur ce sont correctement déroulée j'indique a l'utilisateur que tout a bien fonctionné grâce a la couleur du bouton
        buttonColor(elementButton, true);
      }
      else if (responseText == "false") {
        buttonColor(elementButton, false);
      }
    });

}

function fetch_actionButtonLed(element) {

  fetch('Controler/iotControler.php', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'include',
    body: "method=" + 2 + "&actionButtonId=" + element.id

  })

    .then((response) => response.text())
    .then((responseText) => {

      buttonColor(element, responseText);  //Je renvoie un booleen alors j'appel la fonction changeant la couleur grâce au resultat

    });

}

function fetch_dataTemp(element) {

  fetch('Controler/iotControler.php', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    credentials: 'include',
    body: "method=" + 3

  })

    .then(function (response) {
      response.json().then(function (jsonData) {

        //Initialise le graph de temperature en utilisant les fonctions fournis dans la template , on lui envoi juste nos données recupéreé de l'esp
        initialiseGraph(jsonData.time, jsonData.temp);

        //Comme notre retour est du json avec deux tables alors j'envoie ces deux tables dans ma fonction qui ajoute le tableau
        //addTempDataTable(jsonData.temp,jsonData.time,element.id);

        //TODO controle d'erreur

      });
    });

}

//Fonctions diverses

function buttonColor(button, bool) {

  if (bool) {
    button.style = "background-color:lightgreen";
  }
  else {
    button.style = "background-color:red";
  }
}

function addTempDataTable(dataTemp, dataTime, idTable) {  //ajoute des données au tableau de valeur du photorecepteur

  let table = document.querySelector("#" + idTable);
  if (!table)
    console.log("Error: can\'t create temp data table");

  else {
    //Retirer la classe caché du tableau de valeur dans l'interface
    console.log(table.classList.remove("hidden"));

    let tableTbody = table.getElementsByTagName("TBODY")[0];

    tableTbody.innerHTML = "";

    for (let i = 0; i < dataTemp.length; i++) {
      let string = '<tr><th scope="row">' + (i + 1) + '</th><td>' + dataTime[i] + '</td><td>' + dataTemp[i] + '</td></tr>';
      tableTbody.innerHTML += string;
    }

  }
}




