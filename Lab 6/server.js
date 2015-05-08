var express = require('express');
var app = express();
var Twit = require('twit');
var jf = require('jsonfile');
var swig = require('swig');
var fs = require('fs');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/js', express.static(__dirname + '/js'));
app.use('/data', express.static(__dirname + '/data'));

var images = null;
var T = new Twit({
    consumer_key: 'mOQiygESP9HJ7w76PKKqsHUOv'
    , consumer_secret:'2CJ6Le3CsMAwKWj0rfblmDXzKoGVcFSOnDSGmh1Z7TBinemMOU'
    , access_token:'2763682771-2cSRuzek1iGncCI2H1SPGbcZx6razlCc4IgDu3P'
    , access_token_secret:'cnrKFztbCjKslhenFTfK46o8bAMPzBn2JhIMf5LiIhlc9'
});
var file = './data/data.json';
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/getTweets', function(req,res) {

    var c = req.query.q;
    var t = req.query.tweet;

    T.get('search/tweets', {q: t, count: c}, function (err, data, response) {   //API to get tweets from Twitter
        jf.writeFile(file, data.statuses, function (err) {
            if(err) throw err;
        });
        res.send(data.statuses);
    });
});

app.get('/read',function(req,res){          //API to read the Json file on disk and convert it to CSV
    var tdata;
    fs.exists(file,function(exists){        //Error checking if the JSON file exists or not
        if(exists==true){
            jf.readFile(file, function(err, obj) {              
                if(err)
                    console.log("Error reading file " + err);
                tdata = obj;
                var array = typeof tdata != 'object' ? JSON.parse(tdata) : tdata;
                var str = '';
                var line = '';
                var head = array[0];

                for (var index in array[0]) {
                    if(index=="id" || index=="created_at" || index=="text"              //getting the required headers from the JSON file
                        || index=="coordinates" || index=="place" || index=="geo") {
                            var value = index + "";
                            line += '"' + value.replace(/"/g, '""') + '",';
                        }

                    if(index=="user"){
                        for(var j in array[0][index]){

                            if(j=="id" ||  j=="name" || j=="screen_name" || j=="created_at" ||
                                j=="friends_count" || j=="profile_image_url" || j=="profile_background_color"
                                || j=="time_zone" || j=="location" || j=="followers_count"){

                                var val = j + "";
                                line += '"' + val.replace(/"/g, '""') + '",';           //adding comma as the delimiter
                            }
                        }
                    }
                }
                line = line.slice(0, -1);
                str += line + '\r\n';


                for (var i = 0; i < array.length; i++) {            //getting the required data from the headers selected above
                    var line = '';
                    for (var index in array[i]) {
                        if(index=="id" || index=="created_at" || index=="text"
                            || index=="coordinates" || index=="place"    || index=="geo") {
                            var value = array[i][index] + "";
                            line += '"' + value.replace(/"/g, '""') + '",';
                        }
                        if(index=="user"){
                            for(var j in array[i][index]){
                                if(j=='id' ||  j=="name" || j=="screen_name" || j=="created_at" ||
                                    j=="friends_count" || j=="profile_image_url" || j=="profile_background_color"
                                    || j=="time_zone" || j=="location" || j=="followers_count"){

                                    var value = j + "";
                                    line += '"' + value.replace(/"/g, '""') + '",';
                                }
                            }
                        }
                    }
                    line = line.slice(0, -1);
                    str += line + '\r\n';
                }

                res.send(str);      //sending back the converted CSV file to the client
            });
        }
        else{
            res.send(exists);       //sending error if the files does not exist
        }
    });
});

app.get('/',function(req,res){
    res.render('index');

});

app.listen(3000, function () {
    console.log("Server up on port 3000")
});
