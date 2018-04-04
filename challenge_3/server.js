const express = require('express');
const app = express();

// To parse body
const parser = require('body-parser');
app.use(parser.json());

// To serve client files 
app.use(express.static('compiled'));


// Set Headers 
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res)=>{
    res.send('Hello World!');
});


app.listen(3000, ()=>{
    console.log('Listening to the server...');
});
