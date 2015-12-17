$(window).load(function(){
  $("#preloaderImg").fadeOut("slow");
  $("#loader").delay(1000).fadeOut("slow");
});



$(document).ready(function(){
    
    $(".live-tile").liveTile();   
    $("#flip1").css("display","none");

$("#flip").click(function(){
        $("#panel").slideDown("slow",function(){
            $("#flip").css("display","none");
            $("#flip1").css("display","block");
            $("#content-code").delay(1000).css("display","none");
        });
    });

$("#flip1").click(function(){
        $("#panel").slideUp("slow");
            $("#flip1").css("display","none");
            $("#flip").css("display","block");
            $("#content-code").css("display","block");
    });
$('#about-ms').css('display','block');
$('#ms-team').css('display','none');
$('#TM-MUN').css('display','none');
$('#CarMa').css('display','none');
$('#Speaktacular').css('display','none');
$('#IV').css('display','none');
    
    
    
$(".nav1").click(function(){
    $("#panel").slideUp("slow");
    $("#content-code").css("display","block");
$("#about-ms").css("display","block");
$("#ms-team").css("display","none");
$("#CarMa").css("display","none");
$("#Speaktacular").css("display","none");
$("#IV").css("display","none");
$("#TM-MUN").css("display","none");
    $("#flip1").css("display","none");
    $("#flip").css("display","block");
});
    
$(".nav2").click(function(){
    $("#panel").slideUp("slow");
    $("#content-code").css("display","block");
$("#about-ms").css("display","none");
$("#ms-team").css("display","none");
$("#CarMa").css("display","block");
$("#Speaktacular").css("display","none");
$("#IV").css("display","none");
$("#TM-MUN").css("display","none");
    $("#flip1").css("display","none");
    $("#flip").css("display","block");
});
    
$(".nav3").click(function(){
    $("#panel").slideUp("slow");
    $("#content-code").css("display","block");
$("#about-ms").css("display","none");
$("#ms-team").css("display","none");
$("#CarMa").css("display","none");
$("#Speaktacular").css("display","block");
$("#IV").css("display","none");
$("#TM-MUN").css("display","none");
    $("#flip1").css("display","none");
    $("#flip").css("display","block");
});
    
$(".nav4").click(function(){
    $("#panel").slideUp("slow");
    $("#content-code").css("display","block");
$("#about-ms").css("display","none");
$("#ms-team").css("display","none");
$("#CarMa").css("display","none");
$("#Speaktacular").css("display","none");
$("#IV").css("display","block");
$("#TM-MUN").css("display","none");
    $("#flip1").css("display","none");
    $("#flip").css("display","block");
});
    
$(".nav5").click(function(){
    $("#panel").slideUp("slow");
    $("#content-code").css("display","block");
$("#about-ms").css("display","none");
$("#ms-team").css("display","none");
$("#CarMa").css("display","none");
$("#Speaktacular").css("display","none");
$("#IV").css("display","none");
$("#TM-MUN").css("display","block");
    $("#flip1").css("display","none");
    $("#flip").css("display","block");
});
    
$(".nav6").click(function(){
    $("#panel").slideUp("slow");
    $("#content-code").css("display","block");
$("#about-ms").css("display","none");
$("#ms-team").css("display","block");
$("#CarMa").css("display","none");
$("#Speaktacular").css("display","none");
$("#IV").css("display","none");
$("#TM-MUN").css("display","none");
    $("#flip1").css("display","none");
    $("#flip").css("display","block");
});   
    
});