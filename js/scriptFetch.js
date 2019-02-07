
function fetch_sendIp(element){


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
            buttonLedColor(element,true);
          }       
        else if (responseText == "false"){
          buttonLedColor(element,false);
       }
    });
  
  }

function fetch_actionButtonLed(element){
  console.log(element.innerText);

fetch('Controler/iotControler.php', {
        method: 'POST',
        mode: 'no-cors',// garder la session
        headers: {'Content-Type':'application/x-www-form-urlencoded'},
        credentials: 'include',
        body: "method="+2+"&actionButtonId="+element.id+"&ip"

})

.then((response) =>response.text()) 
    .then((responseText) => {

        if(responseText == "on"){
          buttonLedColor(element,true);
        }       
    	else if (responseText == "off"){
        buttonLedColor(element,false);
        }
  });

}

function buttonLedColor(button,bool){
 if(bool){
  button.style="background-color:lightgreen";
  button.innerText="LED on";
 }
 else{
    button.style="background-color:red";
    button.innerText="LED off";
 }
}




