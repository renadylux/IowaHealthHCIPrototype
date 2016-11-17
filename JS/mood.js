 $( document ).ready(function(){
     $("#moodSumScreen").hide();
     $(".saveMood").click(function(e){
          e.preventDefault();
         $("#moodScreen").slideUp();
         $("#moodSumScreen").show();
     });
     $("#moreMode").click(function(e){
          e.preventDefault();
        $("#moodScreen").slideDown();
        $("#moodSumScreen").hide();
     });
 });