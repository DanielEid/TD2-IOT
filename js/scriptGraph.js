function initialiseGraph(dataTime,dataTemp){

console.log(dataTemp);
  var dom = document.getElementById("containerGraph");
    dom.style="height:300px;"
  var myChart = echarts.init(dom);
  var app = {};
  option = null;
  option = {
      xAxis: {
          type: 'category',
          data:dataTime
        },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: dataTemp,
          type: 'line'
      }]
  };
  ;
  if (option && typeof option === "object") {
      myChart.setOption(option, true);
  }
}