
function fetch_sendIp(element,elementButton){


  fetch('Controler/iotControler.php', {
          method: 'POST',
          mode: 'no-cors',// garder la session
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          credentials: 'include',
          body: "method="+1+"&actionButtonId="+element.id+"&ip="+element.value
  
  })
  
  .then((response) =>response.text()) 
      .then((responseText) => {
    
          if(responseText == "true"){
            buttonColor(elementButton,true);
          }       
        else if (responseText == "false"){
          buttonColor(elementButton,false);
       }
    });
  
  }

function fetch_actionButtonLed(element){

fetch('Controler/iotControler.php', {
        method: 'POST',
        mode: 'no-cors',// garder la session
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        credentials: 'include',
        body: "method="+2+"&actionButtonId="+element.id

})

.then((response) =>response.text()) 
    .then((responseText) => {

        if(responseText == "on"){
          buttonColor(element,true);
        }       
    	else if (responseText == "off"){
        buttonColor(element,false);
        }
  });

}

function fetch_dataTemp(element){

fetch('Controler/iotControler.php', {
        method: 'POST',
        mode: 'no-cors',// garder la session
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        credentials: 'include',
        body: "method="+3

})

.then(function(response) {
  response.json().then(function(jsonData) { 

    console.log(element.classList.remove("hidden"));
    addTempDataTable(jsonData.temp,jsonData.time,element.id);

    //TODO controle d'erreur
    
    });
});

}

//Fonctions diverses

      function buttonColor(button,bool){

      if(bool){
        button.style="background-color:lightgreen";
        //button.innerText="LED on";
      }
      else{
          button.style="background-color:red";
          //button.innerText="LED off";
      }
      }

      function addTempDataTable(dataTemp,dataTime,idTable){

        let table=document.querySelector("#"+idTable);
        if(!table)
          console.log("Error: can\'t create temp data table");

       

        else{
          let tableTbody=table.getElementsByTagName("TBODY")[0];

          tableTbody.innerHTML="";

          for(let i=0;i<dataTemp.length; i++){
            let string='<tr><th scope="row">'+(i+1)+'</th><td>'+dataTime[i]+'</td><td>'+dataTemp[i]+'</td></tr>';
            tableTbody.innerHTML+=string;
          }
          
        }
      }




