 $( document ).ready(function(){
     $("#sleepSumScreen").hide();
     $(".saveSleep").click(function(e){
          e.preventDefault();
         $("#sleepScreen").slideUp();
         $("#sleepSumScreen").show();
     });
     
     $("#moreSleep").click(function(e){
          e.preventDefault();
        $("#sleepScreen").slideDown();
        $("#sleepSumScreen").hide();
     });

    $('.datepicker').pickadate({});

    $('#wakeTime').change(function(){
        setHoursSlept();         
    });

    function setHoursSlept(){
        $("#hoursOfSleep").text("You slept: 7 hrs.");
    }
 });