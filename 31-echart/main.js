$(function(){
  var myChart = echarts.init(document.getElementById('main'));

  var xData = [],
      yData = [];
 
  function myfun (x,n){
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }
  function h(p){
    return -1 * (plog(p) + plog(1 - p));
  }
  function plog(p) {
    return (p === 0)? 0 : p * Math.log2(p);
  }
 
  for(var p =0 ;p<=1;p+=0.1){
    xData.push(myfun(p,1));
    yData.push(myfun(h(p),2));
  }

  var option = {
    title: {
      text: '二进熵函数曲线'
    },
    tooltip: {},
    legend: {
      data:['信息量']
    },
    xAxis: {
      data: xData
    },
    yAxis: {},
    series: [{
      name: '信息量',
      type: 'line',
      smooth: 'true',
      data: yData
    }]
  };
  myChart.setOption(option);
}) 
