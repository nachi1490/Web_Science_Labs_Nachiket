var lat,longit;




function showPosition(position) {
   	lat=  position.coords.latitude;
    longit=position.coords.longitude; 
    getlocation();

}

function load(){
	$(".fakeloader").fakeLoader({
 
// Time in milliseconds for fakeLoader disappear
timeToHide:5000, 
 
spinner:"spinner1",//Options: 
 
// Background color. Hex, RGB or RGBA colors
bgColor:"#0A0A0A",
 
// Custom loading GIF.
imagePath:""
             
});
	
	if (navigator.geolocation) {
		 navigator.geolocation.getCurrentPosition(showPosition);
		
    } 
	

}

function getlocation(){

 
	$.ajax({
    type: "GET",

    url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+longit+"&units=metric",
    dataType: "jsonp",
	
    success: function(responseData, status) {
    	
    	var x = document.getElementById("city");
    	var temp = responseData.main.temp;
    	var city = responseData.name;
    	x.innerHTML = "Weather forecast for "+city;
    	console.log(responseData.weather[0].icon);
    	var icon_url = "http://openweathermap.org/img/w/"+responseData.weather[0].icon+".png";
    	document.getElementById("icon").src = icon_url;
    	document.getElementById("temp").innerHTML=temp;
    	document.getElementById("degree").src = "degree.png";
    	document.getElementById("city_name").innerHTML=city;
    	document.getElementById("desc").innerHTML = responseData.weather[0].description;
    	document.getElementById("wind").innerHTML = "Wind: "+responseData.wind.speed+"mps";
    	document.getElementById("humidity").innerHTML = "Humidity: "+responseData.main.humidity+"%";
		}

	});
}