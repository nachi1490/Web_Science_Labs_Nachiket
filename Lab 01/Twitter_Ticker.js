function load()
{

  $.ajax({          
    type: "GET",
    url: "tweets.json",
    dataType: "json",
	
    success: function (responseData, status) {

      
      var mainDiv = $("#mainDiv");    //mainDiv which will hold the tweeter ticker
      $.each(responseData, function(i, item) {

        //code below is to generate image and tweets
         var ticker = $($("#tweetDiv").html());
         var image = item.user.profile_image_url;   //parse image from JSON
         ticker.find("#image").error(function(){    // if the read image is invalid, put another image
       
        $(this).attr('src', 'photo.jpg');

          });

         container1 = $("<div id = 'dynamictweetDiv'>");  //dynamic div which is generated for each tweet

         ticker.find("#image").attr("src",image);  
         var t = item.text;     //parse tweet from JSON
         ticker.find("#tweets").text(t);
         container1.append(ticker);   
         mainDiv.append(container1);    //append the dynamic Div to the mainDiv


        //code below is to generate hashtags
         var hash = item.entities.hashtags;     //parse hashtags from JSON
        
         var hashtagDiv = $("#hashtagDiv");
         for(var i = 0; i<hash.length; i++){

          var hashtag = $("<div id ='dynamichashDiv'>");  //dynamic Div to hold one hashtag at at time
          hashtag.text("#" + hash[i].text);   //append # to the text to make it Hashtag
          hashtagDiv.append(hashtag);

        }

            
        animator(mainDiv.children(":first"));     //call the animate function for the tweets ticker
        animator(hashtagDiv.children(":first"));  //call the animate function for the hashtags ticker
         
      
	  });

      
	}, error: function(msg) {
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
}



 function animator(currentItem) {
           
    //work out new anim duration
    var distance = currentItem.height(),
    duration = 3000;
 
    //animate the first child of the ticker
    currentItem.animate({ marginTop: -distance }, duration, "linear", function() {
             
      currentItem.appendTo(currentItem.parent()).css("marginTop", 0);
 
    //recurse
    animator(currentItem.parent().children(":first"));
    }); 
  }
       
  
 



