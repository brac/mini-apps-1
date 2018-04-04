const express = require('express');
const app = express();

//To parse body
var parser = require('body-parser');
app.use(parser.json());

// Import DB
//const db = require('./db');

const mongoClient = require('mongodb').MongoClient;
// 27017 is the default port for connecting to MongoDB
// moDB = database name 
const dbUrl = 'mongodb://localhost:27017';
// Database name 
const dbName = 'moDB';

// exports server
module.exports.app = app;


// TO keep track of CSV format result
var csv = '';

// To keep track of each data
var id = 0;

// Set headers
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Serve the client files
app.use(express.static('client'));

// POST request
app.post('/mo__csv_generator', (req, res) => {
    console.log('req.body:', req.body);
    
    // Covert JSON object to CSV format

    // Get first row for the table (ex. firstname, lastname, country...)
    var firstRow = Object.keys(req.body);
    getTitles(firstRow);

    // Get actual data for the table 
    getData(req.body);

    // Call DB
    // Use connect method to connect to the server
    let data = csv;
    mongoClient.connect(dbUrl, function(err, client) {
        if (err) throw err;
        console.log("Connected successfully to Mongo DB server");
    
        const db = client.db(dbName);
    
        db.createCollection('SalesData', (err, collection)=> {
            if (err) throw err;
            console.log('Created collection');

        // Insert it to the collection:
        collection.insert({data}, (err, docs)=>{
            console.log('In Mongo!', {data});
            console.log('Inserted Sales data');
        
            // Colletion#count() gives us the number of items in collection:
            collection.count((err, count)=> {
                console.log('This collection contains ' + count + ' documents.');
            });

            // Colletion#find() returns a "cursor"
            // that can be converted to an array of documents:            
            collection.find().toArray((err, documents)=>{
                documents.forEach((doc)=>{
                    console.log('Found a document with name = ' + doc.data);
                });
            });

            // Close the db connection when we're done with it:
            client.close();
            console.log('Closed the connection!');
        });

        });

    });

    // need to send as JS format
    res.send(csv);

    // To reset csv and id
    csv = '';
    id = 0;
});

// Helper functions for POST request
var getTitles = (array) => {
    console.log('header data:', array);
    var arrayToString = array.join(',');
    csv += arrayToString;
    console.log('csv:', csv);
}

var getData = (obj) => {
    console.log(obj);
    var restOfData = Object.keys(obj).map((key)=> {return obj[key];});
    var arrayToString = restOfData.slice(0, 6).join(',');
    csv += '\n' + id + ',' + arrayToString;
    id++;
    // Recursively find all the children data
    if(obj.children){
        for(var i = 0; i < obj.children.length; i++){
            getData(obj.children[i]);
        }
    } else {
         return;
    }
    console.log('final: ', csv);
}


// GET request
app.get('/mo__csv_generator', (req, res) => {
     res.send(csv);
});



app.listen(3000, ()=> console.log('Is it listening?'));
