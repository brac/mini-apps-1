const express = require('express');
const app = express();


//To parse body
var parser = require('body-parser');
app.use(parser.json());

var csv = '';

// To keep track of each submission
var id = 0;

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Serve the client files
app.use(express.static(__dirname + '../client'));

// POST request
app.post('/mo__csv_generator', (req, res) => {
    console.log('req.body:', req.body);
    
    // Covert JSON object to CSV format

    // Get first row for the table (ex. firstname, lastname, country...)
    var firstRow = Object.keys(req.body);
    getTitles(firstRow);

    // Get actual data for the table 
    // var restOfData = Object.keys(req.body).map((key)=> {return req.body[key];});
    getData(req.body);

    // need to send as JS format
    res.send(csv);
});

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
    csv += '\n' + arrayToString;
 
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
