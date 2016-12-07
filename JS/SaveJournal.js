
 $( document ).ready(function(){
     $("#SaveJournal").click(function resetJournal(e){
          e.preventDefault();
        var jText = $("#journalArea").val();
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd='0'+dd
        } 

        if(mm<10) {
            mm='0'+mm
        }
        today = mm+'/'+dd+'/'+yyyy;
        var listElemText = "Journal " + today + ": " + jText;
        
        $("#jList").prepend("<li class='collection-item'>" + listElemText + "</li>");
    });
});

