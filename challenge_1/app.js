// remember previously selected td
var prevouseTdText;

// remember last winner
var winner;

// remember xUser & oUser
var xUser;
var oUser;

// Resset the game
var resetGame = function(){
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++){
        tds[i].innerHTML = '';
    }
    console.log(winner);
    if(winner){
        alert(`${winner} starts first!`);
        if(winner === xUser){
            prevouseTdText = oUser;
        } else {
            prevouseTdText = xUser;
        } 
    }
}


// get usernames for X & O 
var getUserName = function(id){
    event.preventDefault();
    if(id === 'btn-x'){
        var usernameX = document.getElementById('name-x').value;
        xUser = document.getElementById('x-name').innerHTML = usernameX;
    } else if(id = 'btn-o'){
        var usernameO = document.getElementById('name-o').value;
        oUser = document.getElementById('o-name').innerHTML = usernameO;
    }
}

// User to mark X or O
// Always start from X 
var clickXO = function(id){
    var currentTd = document.getElementById(id);
    if(!prevouseTdText){
        currentTd.innerHTML = xUser;
        prevouseTdText = xUser;
    } else if(prevouseTdText === xUser){
        currentTd.innerHTML = oUser;
        prevouseTdText = oUser;
    } else if (prevouseTdText === oUser) {
        currentTd.innerHTML = xUser;
        prevouseTdText = xUser;
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

    // check winning conditiion
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

    // check if it's tie
    var checkIfNotFull = function(array){
        var finalResult = false;
        var chekIfFullHelper = function(rowCol){
            var filtered = rowCol.filter((text)=> {
                return text === '';
            });
            if(filtered.length > 0){
                finalResult = true;
                return true;
            }        
        }
        for(var i = 0; i < array.length; i++){
            chekIfFullHelper(array[i]);
            if(chekIfFullHelper(array[i]) === true){break;}
        }
        return finalResult;
    }

    if(checkRowsCols(allRowsCols) === true && firstText === xUser){
        document.getElementById('winner').innerText = `Winner is ${xUser}!!!`;
        winner = xUser;
        document.getElementById('x-win').innerHTML++;
    } else if (checkRowsCols(allRowsCols) === true && firstText === oUser){
        document.getElementById('winner').innerText = `Winner is ${oUser}!!!`;
        winner = oUser;
        document.getElementById('o-win').innerHTML++;
    } else if (checkIfNotFull(allRowsCols) === false) {
        document.getElementById('winner').innerText = 'Tie!!!';
    }   
}

//module.exports = app;