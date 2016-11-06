 $( document ).ready(function(){
    var isloggedIn = localStorage.getItem("loggedIn") || "false";
    
    if(isloggedIn == "true"){
        console.log("here");
        $("#loginScreen").hide();
        $("#questionScreen").hide(); 
    } 
    
    $("#signUpBtn").click(function(){
        $("#loginScreen").hide();
        $("#questionScreen").show();
    });

    $("#signUpClose").click(function(){
        $("#questionScreen").hide();
        $("#loginScreen").show();
    });

    $('.datepicker').pickadate(
    {
        selectMonths: true,
        selectYears: 100,
        max: new Date()
    });

    $('select').material_select();

    $(".loginBtn").click(function(e){
        e.preventDefault();
        localStorage.setItem("loggedIn", "true");
        $("#loginScreen").hide();
        $("#questionScreen").hide();
    });
    
    $(".logout").click(function(){
        localStorage.setItem("loggedIn", "false");
        $("#loginScreen").show();
        $("#questionScreen").show();
    });

 });
 