class App extends React.Component {
    constructor(props){
        super(props);
        this.clickCell = this.clickCell.bind(this);
    }

    clickCell(e){
        console.log(e.target.innerText);
        console.log('click!');
        var value = e.target.innerText;
        e.target.innerText = '1';
    }

    render() {
        return (
            <div>
                <h1>Welcome To Mo's Connect Four</h1>
                <table>
                    <tbody>
                        {this.props.board.map((row)=>
                            <Rows key={row[0]} row={row} clickCell={this.clickCell}/>
                        )}
                    </tbody>
                </table>   
            </div>    
        );
    }
}

// ES6 Syntax: if there's a curly braces, make sure to put 'return' keyword
var Rows = (props) => (
    <tr>
        {props.row.map((item)=> {
            
            return <Cell key={item} item={item} clickCell={props.clickCell}/>
        })}
    </tr>
);


var Cell = (props) => (
    <td onClick={(e)=>props.clickCell(e)}>
        {props.item}
    </td>
);