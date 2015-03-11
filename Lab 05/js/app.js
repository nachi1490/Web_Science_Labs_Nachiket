var jetbrains = angular.module("jetbrains",[]);

jetbrains.controller("AppCtrl" , function($scope,$http) {

    var app = this;
    var url = "http://localhost:3000";
    app.save = function () {
        console.log(app.newCount);
        $http.get(url + "/getTweets?q="+app.newCount+"&tweet="+app.newTweet).success(function (data) {
            app.data = data;
        });
    }
});
