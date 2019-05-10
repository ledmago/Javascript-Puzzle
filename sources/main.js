// Game Time
var time = 0;
var timeSet;

// General Settings

var beginningShowTime = 900; // 900 milisecond
var openedImage = 0;
var FirstOneID = -1;
var realOrder = [];
var totalSayac = 0;
var images = ["none","ballon","ballon","bird","bird","city","city","flower","flower"];
var images2= ["none","ballon","ballon","bird","bird","city","city","flower","flower"];
var randomImagesLoad = function()
{
    
 
    for(i = 0; i < 9; i++)
    {
        var rastgele = Math.floor(Math.random() * images.length);
        $("#main-block").append("<div id='"+ i + "' class='block'><img class='" + i +"' id='" + images[i] + "' src='sources/images/" + images[rastgele] + ".jpg'></div>");
        var removedImage = images.splice(rastgele,1);
        realOrder.push(removedImage[0]);
        
        
    }
   
   

}



var startGame = function (difficulty)
{
    $("#GameLauncher").css("display","none");
    $("#timeLeft").fadeIn();
 
    time = difficulty;
    timeSet = setInterval(function(){ 
        
        time-=1;$("#time").text(time) 
        if(time < 1){alert("Time is up !")}

            }, 1000);
    var realSira=  randomImagesLoad();

    setTimeout(function(){     $(".block img").css("display","none"); }, beginningShowTime); // beginning Show Time

    // Click to the image
$( ".block" ).click(function() {
    if(FirstOneID != $(this)[0].id)
    {

    
    openedImage+=1;
    if(openedImage > 1)
    {
       
        openedImage=0;

        if(realOrder[FirstOneID] == realOrder[$(this)[0].id])
        {
            $("#" + $(this)[0].id).addClass("block2");
           $("#" + $(this)[0].id).removeClass("block");

           $("#" + FirstOneID).addClass("block2");
           $("#" + FirstOneID).removeClass("block");
           
           // Delete Images

      totalSayac += 2;
         
      if(totalSayac > 7)
      {
        setTimeout(function(){     alert("You Won - Duration : " + (difficulty - time) + " seconds");   clearInterval(timeSet); }, 300); // 700 milisecond
          
      }
           
         
        
        }
        else{
            setTimeout(function(){     $(".block img").css("display","none"); }, 300); // 700 milisecond
        }

      
    }
    else{
        FirstOneID =  $(this)[0].id;
    }
    var order = ($(this)[0].id);
    $("." + ($(this)[0].id)).css("display","block"); // Image Block
    
}
    


});
}

 // Game Start
   

