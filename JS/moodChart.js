 $( document ).ready(function(){
// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
     function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Happiness', 'Stress Levels'],
          ['1',  90,      10],
          ['2',  48,      48],
          ['3',  13,       60],
          ['4',  70,      30],
          ['5',  14,      10],
          ['6',  60,      10],
          ['7',  90,      35],
          ['8',  11,      90],
          ['9',  7,      95],
          ['10',  57,      50],
          ['11',  68,      40],
          ['12',  35,      70],
          ['13',  78,      30],
          ['14',  32,      70],
          ['15',  34,      12]
        ]);

        var options = {
          title: 'Past Happiness and Stress Percent',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('moodChart'));

        chart.draw(data, options);
      }
 });