function initialiseGraph(dataX,dataY){


//Perso: permet de supprimer le graph et de le refaire (pour l'update des données)
  var container=document.querySelector("#containerGraph");
  container.innerHTML='<div id=\"graphTemp\"></div>';
//  
  var dom = document.getElementById("graphTemp");
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