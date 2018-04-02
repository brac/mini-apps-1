// remember previously selected td
var prevouseTdText;

// remember last winner
var winner;

// Resset the game
var resetGame = function(){
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++){
        tds[i].innerHTML = '';
    }
}

var getUserName = function(){
    
}

// User to mark X or O
// Always start from X 
var clickXO = function(id){
    var currentTd = document.getElementById(id);
    var username = document.getElementById('name').value;
    if(!prevouseTdText){
        currentTd.innerHTML = username;
        prevouseTdText = username;
    } else if(prevouseTdText === username){
        currentTd.innerHTML = "O";
        prevouseTdText = "O";
    } else if (prevouseTdText === "O") {
        currentTd.innerHTML = username;
        prevouseTdText = username;
    } 
    detectWinner();
}

// Announce a winner 
var detectWinner = function(){

    // GET ALL THE ROWS COLUMSSSSSSS ALL OF THEMMMM
    var row1 = [];
    row1.push(document.getElementById('td0').innerHTML, document.getElementById('td1').innerHTML, document.getElementById('td2').innerHTML)
    var row2 = [];
    row2.push(document.getElementById('td3').innerHTML, document.getElementById('td4').innerHTML, document.getElementById('td5').innerHTML)
    var row3 = [];
    row3.push(document.getElementById('td6').innerHTML, document.getElementById('td7').innerHTML, document.getElementById('td8').innerHTML)
    var col1 = [];
    col1.push(document.getElementById('td0').innerHTML, document.getElementById('td3').innerHTML, document.getElementById('td6').innerHTML)
    var col2 = [];
    col2.push(document.getElementById('td1').innerHTML, document.getElementById('td4').innerHTML, document.getElementById('td7').innerHTML)
    var col3 = [];
    col3.push(document.getElementById('td2').innerHTML, document.getElementById('td5').innerHTML, document.getElementById('td8').innerHTML)
    var major = [];
    major.push(document.getElementById('td0').innerHTML, document.getElementById('td4').innerHTML, document.getElementById('td8').innerHTML)
    var minor = [];
    minor.push(document.getElementById('td2').innerHTML, document.getElementById('td4').innerHTML, document.getElementById('td6').innerHTML)

    var allRowsCols = [row1, row2, row3, col1, col2, col3, major, minor];

    // Get the first text to check who's the winner
    var firstText;

    var checkRowsCols = function(array){
        var finalResult;
        var checkWinner = function(rowCol){
            var result = !!rowCol.reduce((memo, text)=> {
                return (memo === text) ? memo : NaN;
            });
            finalResult = result;
            if(result === true){
                firstText = rowCol[0];
                return true;
            }        
        }
        for(var i = 0; i < array.length; i++){
            checkWinner(array[i]);
            if(checkWinner(array[i]) === true){break;}
        }
        return finalResult;
    }

    var checkIfNotFull = function(array){
        var finalResult = false;
        var chekIfFullHelper = function(rowCol){
            var result = !!rowCol.find((text)=> {
                return text === '';
            });
            if(result !== ''){
                result = true;
                finalResult = true;
                return result;
            }        
        }
        for(var i = 0; i < array.length; i++){
            chekIfFullHelper(array[i]);
            if(chekIfFullHelper(array[i]) === true){break;}
        }
        return finalResult;
    }
    console.log(checkIfNotFull(allRowsCols));

    if(checkRowsCols(allRowsCols) === true && firstText === 'X'){
        document.getElementById('winner').innerText = 'Winner is X!!!';
        winner = 'X';
    } else if (checkRowsCols(allRowsCols) === true && firstText === 'O'){
        document.getElementById('winner').innerText = 'Winner is O!!!';
        winner = 'O';
    } else if (checkIfNotFull(allRowsCols) === false) {
        document.getElementById('winner').innerText = 'Tie!!!';
    }   
}

