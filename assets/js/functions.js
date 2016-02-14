$(document).ready(function(){
   $(".buy-button").on("click",function(){
       $(this).siblings().toggleClass("opacity");
       
      
   });
    
    $(".pause-button").hide();
    $(".pause").hide();
    
});

var i=0;
$(".play").on("click",function(){
    
    i=$(this).prev(".song-name").attr("nr");
    var path = $(".song-name").eq(i-1);
    initAudio($(path));
                  
    });

   var audio;




function initAudio(element){
    
    //informatii despre numele molodiei si locatie
    var song = element.attr("sursa");
    var title = element.attr("nume");
    
    
    //create audio object
    audio = new Audio("assets/img/top-songs/" + song);
    audio.volume=0.5;
    $(".song").text(title);
    
    //play button
    
    $(".play,.play-button").on("click",function(){
       
        audio.play();
       $(".play-button").hide();
       $(this,".play").hide();
       $(".pause-button").show();
       $(".pause").show();
       $(this).parent().addClass("active");
       showDuration();

    });
    
    //pause button
    
    $(".pause-button,.pause").on("click",function(){
       audio.pause();
       $(".play-button").show();
       $(".play").show();
       $(".pause-button").hide();
       $(".pause").hide();
        $(this).parent().removeClass("active");
    
    });
    
    //volume
    $(".volume").change(function(){
       audio.volume = parseFloat(this.value/10); 
    });
   
    
    //duration
    
    function showDuration(){
        
        $(audio).bind("timeupdate",function(){
           
            var value=0;
            if(audio.currentTime > 0){
                
                value = Math.floor((100/audio.duration)*audio.currentTime);
            }
            
            
            $(".progress-bar").width(value + "%");
            
            if(audio.currentTime==audio.duration)
                {
                    $(".progress-bar").width("0");
                    $(".pause-button").hide();
                    $(".play-button").show();
                }
         
        });
        
    }

}


//scroll


$(window).scroll(function(){
   
    var wScroll = $(this).scrollTop();
    if(wScroll > $(".top").offset().top - ($(window).height()/1.5)){
        
        $(".rand figure").each(function(j){
            
            setTimeout(function(){
                $(".rand figure").eq(j).addClass("is-showing");
            },300 * (j+1));
            
            
        });
    }
    
    
    
    
});


























