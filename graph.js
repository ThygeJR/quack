window.onload = function(){
  var options = {
    chart: {
      type: 'line'
    },
    series: [{
      name: 'sales',
      data: [25000,25632,25392,28132,29821,30148,31578,33754,49736]
    }],
    xaxis: {
      categories: [12,13,14,15,16,17,18, 19,20]
    },
    stroke: {
      curve: 'smooth'
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 3,
      opacity: 0.5
    }
  }

  var chart = new ApexCharts(document.querySelector("#chart"), options);

  chart.render();
}

fetch('testData.csv').then(response => {
  return response.text()
}).then(testData => {
  console.log(testData);
});

$.get( "testData.csv", function( data ) { 
    console.log('data1' + data1);
});

$.ajax({
    type: "GET",
    url: "testData.csv",
    dataType: "text",
    success: function(data2) {console.log('data2' + data2);}
});