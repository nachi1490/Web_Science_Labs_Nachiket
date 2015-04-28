var mongoose = require('./mongoose_connector').mongoose;
var db = require("./mongoose_connector").db;

var Schema = mongoose.Schema;
var TweetsSchema = new Schema({
    data: JSON                                      //new Mongoose schema to store the tweets. Dataype is JSON
});

var Tweets=mongoose.model('User',TweetsSchema);     //new mongoose model declared

function saveDataInMongoDB(tweetsData,res){         //this function saves the data coming from twitter into mongoDB
    Tweets.collection.insert(tweetsData);
    res.send("Successfully saved data in MongoDB");

}

function readData(count,callback){                  //This function reads the existing data from MongoDB and sends it to the frontend for display
    var query = Tweets.find({}).limit(count);
    query.exec(function(err,data){
        callback(data);
    });
}

function readforMongo(callback){                //This function reads data from Mongo and sends it to the server to create a JSON file
    var query = Tweets.find({});
    query.exec(function(err,data){
       console.log(data.length);
         if(data.length==0)                     //error checking for no data
            callback(null);
        else
            callback(data);
    });
}

exports.Tweets = Tweets;
exports.saveDataInMongoDB = saveDataInMongoDB;
exports.readData = readData;
exports.readforMongo = readforMongo;