 $( document ).ready(function(){
    $(".dropdown-button").dropdown();
    $(".dropdown-button2").dropdown(); 
    $(".button-collapse").sideNav();
    $("#questionScreen").hide();
    $('.carousel.carousel-slider').carousel({full_width: true});
     $('.datepicker').pickadate(
    {
        selectMonths: true,
        selectYears: 100,
        max: new Date()
    });
    $('#updateSettings').click(function(e){
        e.preventDefault(); 
    });
 });
 