var jetbrains = angular.module("jetbrains",[]);


jetbrains.controller("AppCtrl" , function($scope,$http) {

    var app = this;
    var imge = "https://pbs.twimg.com/profile_images/520798154791608320/VtcofUGA_normal.jpeg";
    var url = "http://localhost:3000";
    app.save = function () {
        console.log("on click of get tweets");
        console.log(app.newCount);
            $http.get(url + "/getTweets?q="+app.newCount+"&tweet="+app.newTweet).success(function (data) {
            app.data = data;

        });
    }

});

function download(){            //onCLick function of download button
    var url1 = "http://localhost:3000";
    var nameCSV = $("#nameCsv").val();
    if($("#nameCsv").val()==""){
        $('#message').html("Please enter the name of the CSV file first");
        return;
    }
    $.ajax({
        type: "GET",
        url: url1+"/read",

        success: function (data, status) {

            if(data==false){        //If file does not exist this error will be displayed to the user
               
                $('#message').html("Error : No Json File exists, Please hit the Get Tweets button to generate a JSON file first");

            }
            else {          //else the CSV file with the name typed in by the user will be downloaded by the browser
                var csv = data;
                var downloadLink = document.createElement("a");
                var blob = new Blob(["\ufeff", csv]);
                var url = URL.createObjectURL(blob);
                downloadLink.href = url;
                downloadLink.download = nameCSV + ".csv";
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            }
        }
    });
}


