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
            ]
        }

        this.clickCell = this.clickCell.bind(this);
    }

    clickCell(id){
        console.log('col: ', id);
        console.log('click!');
        // iterate through the column and check an empty spot
        for(var i = this.state.board.length-1; i >= 0; i--){
            console.log(this.state.board[i][id]);
            if(this.state.board[i][id] === 0){
                var copyboard = this.state.board.slice();
                copyboard[i][id] = 1;
                this.setState({board: copyboard});
                break;
            }
        }

    }

    render() {
        return (
            <div>
                <h1>Welcome To Mo's Connect Four</h1>
                <table>
                    <tbody>
                        {this.state.board.map((row, index)=>
                            <Rows cellId={this.state.cellId} rowId={'row' + index} key={'row' + index} row={row} clickCell={this.clickCell}/>
                        )}
                    </tbody>
                </table>   
            </div>    
        );
    }
}

// ES6 Syntax: if there's a curly braces, make sure to put 'return' keyword
var Rows = (props) => (
    <tr id={props.rowId}>
        {props.row.map((item, index)=> {
            return <Cell cellId={'cell' + index} key={'cell' + index} item={item} clickCell={()=> props.clickCell(index)}/>
        })}
    </tr>
);


var Cell = (props) => (
    <td id={props.cellId} onClick={props.clickCell} >
        {props.item}
    </td>
);