 $( document ).ready(function(){
     $("#saveSleep").click(function(e){
          e.preventDefault();
         $("#sleepScreen").slideUp();
     });
     
     $("#moreSleep").click(function(e){
          e.preventDefault();
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