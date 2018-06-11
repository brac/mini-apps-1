// remember previously selected td
var previousText;

// remember last winner
var winner;

// remember xUser & oUser
var xUser;
var oUser;

// To prevent double clicking
var tds = document.querySelectorAll('td');
var tdsObj = {};
for(var i = 0; i < tds.length; i ++){
    tdsObj[tds[i].id] = {clicked: false};
}


// Reset the game
var resetGame = function(){

    // Why define tds again here? Can you not use the tds 
    //     variable that you defined on line 12?
    
    var tds = document.getElementsByTagName('td');
    for(var i = 0; i < tds.length; i++){
        tds[i].innerHTML = '';
    }
    console.log('winner:', winner);
    if(winner){
        alert(`${winner} starts first!`);
        if(winner === xUser){
            previousText = oUser;
        } else {
            previousText = xUser;
        } 
    }

    // Could you DRY 41-43 up with a helper function? 
    //     It seems like your also doing this to 
    //     prevent double clicking
    
    // Resetting clicked property
    for(var i = 0; i < tds.length; i ++){
        tdsObj[tds[i].id] = {clicked: false};
    }
}


// get usernames for X & O 
var getUserName = function(id){

    // Why preventDefault()?
    
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
    console.log(tdsObj);

    var currentTd = document.getElementById(id);

    if(tdsObj[id].clicked === false){
        tdsObj[id].clicked = true;
        if(!previousText){
            currentTd.innerHTML = xUser;
            previousText = xUser;
        } else if(previousText === xUser){
            currentTd.innerHTML = oUser;
            previousText = oUser;
        } else if (previousText === oUser) {
            currentTd.innerHTML = xUser;
            previousText = xUser;
        } 
        detectWinner();
    } else {
        alert('You can\'t select same spot!');
    }
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

    // check winning condition
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
        var checkIfFullHelper = function(rowCol){
            var filtered = rowCol.filter((text)=> {
                return text === '';
            });
            if(filtered.length > 0){
                finalResult = true;
                return true;
            }        
        }
        for(var i = 0; i < array.length; i++){
            checkIfFullHelper(array[i]);
            if(checkIfFullHelper(array[i]) === true){break;}
        }
        return finalResult;
    }

    if(checkRowsCols(allRowsCols) === true && firstText === xUser){
        document.getElementById('winner').innerText = `Winner is ${xUser}!!!`;
        winner = xUser;
        document.getElementById('x-win').innerHTML++;
        resetGame();
    } else if (checkRowsCols(allRowsCols) === true && firstText === oUser){
        document.getElementById('winner').innerText = `Winner is ${oUser}!!!`;
        winner = oUser;
        document.getElementById('o-win').innerHTML++;
        resetGame();
    } else if (checkIfNotFull(allRowsCols) === false) {
        document.getElementById('winner').innerText = 'Tie!!!';
        resetGame();
    }   

}

//module.exports = app;
