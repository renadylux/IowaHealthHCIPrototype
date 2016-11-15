 $( document ).ready(function(){
     $("#saveMood").click(function(e){
          e.preventDefault();
         $("#moodScreen").slideUp();
     });
     $("#moreMode").click(function(e){
          e.preventDefault();
        $("#moodScreen").slideDown();
     });
 });