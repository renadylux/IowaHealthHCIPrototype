 $( document ).ready(function(){
     $("#saveSleep").click(function(){
         $("#sleepScreen").slideUp();
     });
     
     $("#moreSleep").click(function(){
        $("#sleepScreen").slideDown();
     });

    $('.datepicker').pickadate({});

var sleepTime = 0;
var wakeTime = 0;

    $('#sleepTime').change(function(){
        
    });

    $('#wakeTime').change(function(){
        setHoursSlept(); 
        
    });

    function setHoursSlept(){
        $("#hoursOfSleep").text("You slept: 7 hrs.");
    }
 });