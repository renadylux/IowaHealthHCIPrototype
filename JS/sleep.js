 $( document ).ready(function(){
     $("#saveSleep").click(function(){
         $("#sleepScreen").slideUp();
     });
     
     $("#moreSleep").click(function(){
        $("#sleepScreen").slideDown();
     });

    $('.datepicker').pickadate({});

    $('#wakeTime').change(function(){
        setHoursSlept(); 
        
    });

    function setHoursSlept(){
        $("#hoursOfSleep").text("You slept: 7 hrs.");
    }
 });