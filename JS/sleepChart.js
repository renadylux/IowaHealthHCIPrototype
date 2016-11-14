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
          ['Day', 'Hours Slept'],
          ['1',  8],
          ['2',  7.5],
          ['3',  6],
          ['4',  5],
          ['5',  9],
          ['6',  10],
          ['7',  8],
          ['8',  8],
          ['9',  8],
          ['10',  7.25],
          ['11',  6],
          ['12',  3],
          ['13',  3],
          ['14',  3],
          ['15',  5]
        ]);

        var options = {
          title: 'Past Sleep',
          curveType: 'function',
          legend: { position: 'bottom' },
          width: window.innerWidth - 5
        };

        var chart = new google.visualization.LineChart(document.getElementById('sleepChart'));

        chart.draw(data, options);
      }
 });