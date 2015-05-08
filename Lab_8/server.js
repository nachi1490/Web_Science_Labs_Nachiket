var express = require('express');
var app = express();
var jf = require('jsonfile');
var swig = require('swig');
var fs = require('fs');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/js', express.static(__dirname + '/js'));
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
var SparqlClient = require('sparql-client');        //using NPM package sparqlclient
var sparql = require('sparql');
var util = require('util');
var endpoint = 'http://dbpedia.org/sparql';

app.get('/',function(req,res){
    res.render('index');
});

app.get('/getSparqlData',function(req,res){             // API to get queries from DBpedia
    var query = req.query.q;
    var client = new SparqlClient(endpoint);
    client.query(query).execute(function(error, result) {
           res.send(result);
        });
});

app.listen(3000, function () {
    console.log("Server up on port 3000");
});
