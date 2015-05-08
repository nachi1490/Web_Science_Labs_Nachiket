var jetbrains = angular.module("jetbrains",[]);
jetbrains.controller("AppCtrl" , function($scope,$http) {
    var app = this;
    var url = "http://localhost:3000";
    app.content = "select ?subject ?predicate ?object where { ?subject ?predicate ?object } Limit 10";  //default query
    app.save = function () {                                                                            // on click of submit button
        var tc = $("#comment").val();
        if(!tc){                                                                                        //error handling
            $('#message').html("Please enter some data first");
            return;
        }
        $http.get(url + "/getSparqlData?q="+tc).success(function (data) {                               //This API gets Data from DBpedia
            app.data = data.results;
        });
    }

});
