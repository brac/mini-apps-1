class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: [
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]
            ], 
            players: {
                playerOne: '',
                playerTwo: ''
            },
            newPlayer: '',
            previousPlayer: '',
            winner: ''

        }

        this.getPlayerOne = this.getPlayerOne.bind(this);
        this.getPlayerTwo = this.getPlayerTwo.bind(this);
        this.clickCell = this.clickCell.bind(this);
        this.detectWinner = this.detectWinner.bind(this);
        this.checkRows = this.checkRows.bind(this);
        this.checkCols = this.checkCols.bind(this);
        this.checkMajors = this.checkMajors.bind(this);
        this.checkMinors = this.checkMinors.bind(this);

    }

    getPlayerOne(e){
        this.state.newPlayer = e.target.value;
        var playersCopy = this.state.players;
        playersCopy.playerOne = this.state.newPlayer 
        console.log('player one:', playersCopy);
        this.setState({players: playersCopy});
    }

    getPlayerTwo(e){
        this.state.newPlayer = e.target.value;
        var playersCopy = this.state.players;
        playersCopy.playerTwo = this.state.newPlayer 
        console.log('player two:', playersCopy);
        this.setState({players: playersCopy});
    }

    clickCell(id){
        console.log('col: ', id);
        // iterate through the column and check an empty spot

        // if(this.state.winner){
            
        //     // if winner was playerone, set previousplayer to playertwo, otherwise, previousplayer is playerone
        //     this.state.previousPlayer = (this.state.winner === this.state.players.playerOne) ? this.state.players.playerTwo : this.state.players.playerOne;
        // }
        // } else {
        //     console.log('winner');
        //     this.state.previousPlayer = this.state.players.playerTwo;
        // }

        for(var i = this.state.board.length-1; i >= 0; i--){
            if(this.state.board[i][id] === 0){
                var copyboard = this.state.board.slice();
                if(this.state.previousPlayer === this.state.players.playerOne){
                    copyboard[i][id] = this.state.players.playerTwo;
                    this.state.previousPlayer = this.state.players.playerTwo;
                } else if (this.state.previousPlayer === this.state.players.playerTwo){
                    copyboard[i][id] = this.state.players.playerOne;
                    this.state.previousPlayer = this.state.players.playerOne;
                } else {
                    copyboard[i][id] = this.state.players.playerOne;
                    this.state.previousPlayer = this.state.players.playerOne;
                }
                this.setState({board: copyboard});
                break;
            }
        }

        this.detectWinner(this.state.board);
    }

    detectWinner(board){

        var winningCondition = {
            playerOne: [this.state.players.playerOne, this.state.players.playerOne, this.state.players.playerOne, this.state.players.playerOne],
            playerTwo: [this.state.players.playerTwo, this.state.players.playerTwo, this.state.players.playerTwo, this.state.players.playerTwo]
        };

        this.checkRows(board, winningCondition);
        this.checkCols(board, winningCondition);
        //this.checkMajors(board);
        //checkMinors(board);

    }

    checkRows(board, winningCondition){
        // check 0, 1, 2, 3  && 3, 4, 5, 6 columns

        for(var i = 0; i < board.length; i ++){
            var row = [];
            row.push(board[i][0], board[i][1], board[i][2], board[i][3]);
                if(JSON.stringify(row) === JSON.stringify(winningCondition.playerOne)){
                    this.setState({winner: `${this.state.players.playerOne}`});
                } else if (JSON.stringify(row) === JSON.stringify(winningCondition.playerTwo)){
                    this.setState({winner: `${this.state.players.playerTwo}`});
                }
            var row = [];
            row.push(board[i][3], board[i][4], board[i][5], board[i][6]);
            if (JSON.stringify(row) === JSON.stringify(winningCondition.playerOne)) {
                this.setState({ winner: `${this.state.players.playerOne}` });
            } else if (JSON.stringify(row) === JSON.stringify(winningCondition.playerTwo)) {
                this.setState({ winner: `${this.state.players.playerTwo}` });
            }    
        }
    }

    checkCols(board, winningCondition){
        // check 2, 3, 4, 5 rows

        for(var i = 0; i < board[0].length; i ++){
            var col = [];
            for(var j = board.length-1; j >= 2; j--){
                col.push(board[j][i]);
            }
            if (JSON.stringify(col) === JSON.stringify(winningCondition.playerOne)) {
                this.setState({ winner: `${this.state.players.playerOne}` });
            } else if (JSON.stringify(col) === JSON.stringify(winningCondition.playerTwo)) {
                this.setState({ winner: `${this.state.players.playerTwo}` });
            }   

        }
    }

    checkMajors(board){
        // landing point (starting point) -> +1 col -1 row 
            for(var i = 0; i < board[0].length; i++ ){
                var major = [];
                major.push(board[j][i]);
                       
            }
    }
 

    checkMinors(board){

    }
    

    render() {
        return (
            <div>
                <h1>Welcome To Mo's Connect Four</h1>
                <form>
                    Player One Name: <input type="text" onChange={(e)=> this.getPlayerOne(e)}></input> <br/>
                    Player Two Name: <input type="text" onChange={(e)=> this.getPlayerTwo(e)}></input>
                </form>    

                <table>
                    <tbody>
                        {this.state.board.map((row, index)=>
                            <Rows players={this.state.players} key={'row' + index} row={row} clickCell={this.clickCell}/>
                        )}
                    </tbody>
                </table>
                <div>
                   <h3>Winner is...{this.state.winner}</h3>     
                </div>   
            </div>    
        );
    }
}

// ES6 Syntax: if there's a curly braces, make sure to put 'return' keyword
var Rows = (props) => (
    <tr>
        {props.row.map((item, index)=> {
            return <Cell players={props.players} key={'cell' + index} item={item} clickCell={()=> props.clickCell(index)}/>
        })}
    </tr>
);


var Cell = (props) => (
    <td onClick={props.clickCell} className={props.item === props.players.playerOne ? 'pink' : (props.item === props.players.playerTwo ? 'red' : 'white')} >
        {/* {props.item} */}
    </td>
);