 $( document ).ready(function(){
    var isloggedIn = localStorage.getItem("loggedIn") || "false",
        firstName = localStorage.getItem("firstName") || null;
    $("#mainContent").hide();
    if(isloggedIn == "true"){
        $("#loginScreen").hide();
        $("#questionScreen").hide();
        $("#mainContent").show(); 
        setName();
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
        $("#mainContent").show();
    });
    
    $(".logout").click(function(){
        localStorage.setItem("loggedIn", "false");
        $("#loginScreen").show();
        $("#questionScreen").show();
    });

    $("#signUpFinish").click(function(){
        var fname = $("#first_name").val();
        console.log(fname);
        localStorage.setItem("firstName" , fname);
        setName();
       

    });

 function setName(){
     var fname = localStorage.getItem("firstName");
    $("#welcomeText").text("Hello " + fname + "! How are you doing today?");
 }

 });

 