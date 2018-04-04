/* Install node-mongodb-native by doing:
 *  npm install mongodb
 * See documentation at https://github.com/mongodb/node-mongodb-native
 * Run this command in the terminal to launch mongo server:
 *  mongod --dbpath=/data --port 27017
 * Run this file with:
 *  node mongo-example.js
 */

const mongoClient = require('mongodb').MongoClient;

// 27017 is the default port for connecting to MongoDB
// moDB = database name 
const url = 'mongodb://localhost:27017/';

// Database name 
var dbName = 'moDB';

// Exports DB
module.exports.db = mongoClient;

// Open the client's connection to the server:
mongoClient.connect(url, (err, client)=> {
    console.log('Connected to MongoDB!');
    if (err) throw err;

    // var dbase = db.db("moDB");
    const db = client.db(dbName);

    // // Create a collection, if it doesn't exist already:
    // db.createCollection('demo', (err, collection)=> {
    //     if (err) throw err;
    //     console.log('Created collection');

    //     // Here's the document we want to insert:
    //     var testData = {
    //         name: 'Mo Lee',
    //         password: '7777'
    //     }

    //     // Insert it to the collection:
    //     collection.insert(testData, (err, docs)=>{
    //         console.log('Inserted test data');
        
    //         // Colletion#count() gives us the number of items in collection:
    //         collection.count((err, count)=> {
    //             console.log('This collection contains ' + count + ' documents.');
    //         });

    //         // Colletion#find() returns a "cursor"
    //         // that can be converted to an array of documents:            
    //         collection.find().toArray((err, documents)=>{
    //             documents.forEach((doc)=>{
    //                 console.log('Found a document with name = ' + doc.name);
    //             });
    //         });

    //         // Close the db connection when we're done with it:
    //         client.close();
    //         console.log('Closed the connection!');
    //     });

    // });

});

