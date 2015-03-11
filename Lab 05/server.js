var express = require('express');
var app = express();
var Twit = require('twit');
var jf = require('jsonfile');
var swig = require('swig');
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
    console.log(c);
    var t = req.query.tweet;
    console.log(t);
    T.get('search/tweets', {q: t, count: c}, function (err, data, response) {
        jf.writeFile(file, data.statuses, function (err) {
            if(err) throw err;
        });
        res.send(data.statuses);
    });
});

app.get('/',function(req,res){
    res.render('index');

});

app.listen(3000);