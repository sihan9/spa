$(function(){
  var myChart = echarts.init(document.getElementById('main'));

  var xData = [2000,2005,2010,2015,2020],
      yData = [6,9,8,8,7];
  
  var option = {
      title: {
          text: 'JavaScript语言排名变化'
      },
      tooltip: {},
      xAxis: {
          data:xData 
      },
      yAxis: {},
      series: [{
          type: 'line',
          smooth:false,
          data: yData
      }]
  };
  myChart.setOption(option);
  var list = $('#list');
  var data = [
    ['Java', '1', '降', '-0.01%'],
    ['C', '2', '升', '+2.44%'],
    ['Python', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#', '5',  '升', '+2.07%'],
    ['Visual Basic.NET', '6',  '降', '-1.17%'],
    ['JavaScript', '7', '降', '-0.85%']
  ];
  var hot = new Handsontable(list.get(0), {
    data: data,
    contextMenu: true,          
    manualRowResize : true,      
    manualColumnResize : true,
    className:'htCenter htMiddle', 
    colHeaders: [
      '语言名称',
      '排名',
      '升或降',
      '变化幅度'
    ]
  });

  
}) 
