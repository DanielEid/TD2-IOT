function initialiseGraph(elementContainer,dataX,dataY){

//Perso: permet de supprimer le graph et de le refaire (pour l'update des données)
  var container=document.querySelector("#"+elementContainer);
  container.innerHTML='<div id='+elementContainer+'Inner></div>';  //Creation de l'element fils
//  
  var dom = document.getElementById(elementContainer+'Inner');  //Recuperation de l'element fils
  dom.style="height:300px;"
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  option = {
      xAxis: {
          type: 'category',
          data:dataX
        },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: dataY,
          type: 'line'
      }]
  };
  ;
  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
}