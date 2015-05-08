var jetbrains = angular.module("jetbrains",[]);
jetbrains.controller("AppCtrl" , function($scope,$http) {

    var app = this;
    var url = "http://localhost:3000";
    app.saveInMongo = function () {     //onclick event of save in mongo button
        var tc = $("#saveInMongo").val();
        var tm = $("#MongoText").val();
        if(!tc || !tm){
            $('#message').html("Please enter some data first");
            return;
        }
        $http.get(url + "/getTweetsforMongo?q="+app.newcount+"&tweet="+app.mongoText).success(function (data) { //This API saves the tweet data into the Mongo DB
            console.log("saved tweets");
            $('#message').html("Successfully saved data in MongoDB");
        });
    }

    app.JSONFromMongo = function(){         //This function creates the JSON file in the data folder on server
        var t = $("#saveFromMongo").val();
        if(!t){
            $('#message').html("Please enter the file name first");
            return;
        }
        $http.get(url + "/JSONFromMongo?q=" + app.saveFromMongoFileName).success(function (data) {
            $('#message').html(data.mess);
        });
    }
});

function rowStyle(row, index) {
    var classes = ['active', 'success', 'info', 'warning', 'danger'];

    if (index % 2 === 0 && index / 2 < classes.length) {
        return {
            classes: classes[index / 2]
        };
    }
    return {};
}


function download(){            //onCLick function of download button
    console.log("INside dowlnoad");
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

