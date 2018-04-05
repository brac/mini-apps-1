'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]],
            players: {
                playerOne: '',
                playerTwo: ''
            },
            newPlayer: '',
            previousPlayer: '',
            winner: ''

        };

        _this.getPlayerOne = _this.getPlayerOne.bind(_this);
        _this.getPlayerTwo = _this.getPlayerTwo.bind(_this);
        _this.clickCell = _this.clickCell.bind(_this);
        _this.detectWinner = _this.detectWinner.bind(_this);
        _this.checkRows = _this.checkRows.bind(_this);
        _this.checkCols = _this.checkCols.bind(_this);
        _this.checkMajors = _this.checkMajors.bind(_this);
        _this.checkMinors = _this.checkMinors.bind(_this);

        return _this;
    }

    _createClass(App, [{
        key: 'getPlayerOne',
        value: function getPlayerOne(e) {
            this.state.newPlayer = e.target.value;
            var playersCopy = this.state.players;
            playersCopy.playerOne = this.state.newPlayer;
            console.log('player one:', playersCopy);
            this.setState({ players: playersCopy });
        }
    }, {
        key: 'getPlayerTwo',
        value: function getPlayerTwo(e) {
            this.state.newPlayer = e.target.value;
            var playersCopy = this.state.players;
            playersCopy.playerTwo = this.state.newPlayer;
            console.log('player two:', playersCopy);
            this.setState({ players: playersCopy });
        }
    }, {
        key: 'clickCell',
        value: function clickCell(id) {
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

            for (var i = this.state.board.length - 1; i >= 0; i--) {
                if (this.state.board[i][id] === 0) {
                    var copyboard = this.state.board.slice();
                    if (this.state.previousPlayer === this.state.players.playerOne) {
                        copyboard[i][id] = this.state.players.playerTwo;
                        this.state.previousPlayer = this.state.players.playerTwo;
                    } else if (this.state.previousPlayer === this.state.players.playerTwo) {
                        copyboard[i][id] = this.state.players.playerOne;
                        this.state.previousPlayer = this.state.players.playerOne;
                    } else {
                        copyboard[i][id] = this.state.players.playerOne;
                        this.state.previousPlayer = this.state.players.playerOne;
                    }
                    this.setState({ board: copyboard });
                    break;
                }
            }

            this.detectWinner(this.state.board);
        }
    }, {
        key: 'detectWinner',
        value: function detectWinner(board) {

            var winningCondition = {
                playerOne: [this.state.players.playerOne, this.state.players.playerOne, this.state.players.playerOne, this.state.players.playerOne],
                playerTwo: [this.state.players.playerTwo, this.state.players.playerTwo, this.state.players.playerTwo, this.state.players.playerTwo]
            };

            this.checkRows(board, winningCondition);
            this.checkCols(board, winningCondition);
            //this.checkMajors(board);
            //checkMinors(board);
        }
    }, {
        key: 'checkRows',
        value: function checkRows(board, winningCondition) {
            // check 0, 1, 2, 3  && 3, 4, 5, 6 columns

            for (var i = 0; i < board.length; i++) {
                var row = [];
                row.push(board[i][0], board[i][1], board[i][2], board[i][3]);
                if (JSON.stringify(row) === JSON.stringify(winningCondition.playerOne)) {
                    this.setState({ winner: '' + this.state.players.playerOne });
                } else if (JSON.stringify(row) === JSON.stringify(winningCondition.playerTwo)) {
                    this.setState({ winner: '' + this.state.players.playerTwo });
                }
                var row = [];
                row.push(board[i][3], board[i][4], board[i][5], board[i][6]);
                if (JSON.stringify(row) === JSON.stringify(winningCondition.playerOne)) {
                    this.setState({ winner: '' + this.state.players.playerOne });
                } else if (JSON.stringify(row) === JSON.stringify(winningCondition.playerTwo)) {
                    this.setState({ winner: '' + this.state.players.playerTwo });
                }
            }
        }
    }, {
        key: 'checkCols',
        value: function checkCols(board, winningCondition) {
            // check 2, 3, 4, 5 rows

            for (var i = 0; i < board[0].length; i++) {
                var col = [];
                for (var j = board.length - 1; j >= 2; j--) {
                    col.push(board[j][i]);
                }
                if (JSON.stringify(col) === JSON.stringify(winningCondition.playerOne)) {
                    this.setState({ winner: '' + this.state.players.playerOne });
                } else if (JSON.stringify(col) === JSON.stringify(winningCondition.playerTwo)) {
                    this.setState({ winner: '' + this.state.players.playerTwo });
                }
            }
        }
    }, {
        key: 'checkMajors',
        value: function checkMajors(board) {
            // landing point (starting point) -> +1 col -1 row 
            for (var i = 0; i < board[0].length; i++) {
                var major = [];
                major.push(board[j][i]);
            }
        }
    }, {
        key: 'checkMinors',
        value: function checkMinors(board) {}
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Welcome To Mo\'s Connect Four'
                ),
                React.createElement(
                    'form',
                    null,
                    'Player One Name: ',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this2.getPlayerOne(e);
                        } }),
                    ' ',
                    React.createElement('br', null),
                    'Player Two Name: ',
                    React.createElement('input', { type: 'text', onChange: function onChange(e) {
                            return _this2.getPlayerTwo(e);
                        } })
                ),
                React.createElement(
                    'table',
                    null,
                    React.createElement(
                        'tbody',
                        null,
                        this.state.board.map(function (row, index) {
                            return React.createElement(Rows, { players: _this2.state.players, key: 'row' + index, row: row, clickCell: _this2.clickCell });
                        })
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'h3',
                        null,
                        'Winner is...',
                        this.state.winner
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

// ES6 Syntax: if there's a curly braces, make sure to put 'return' keyword


var Rows = function Rows(props) {
    return React.createElement(
        'tr',
        null,
        props.row.map(function (item, index) {
            return React.createElement(Cell, { players: props.players, key: 'cell' + index, item: item, clickCell: function clickCell() {
                    return props.clickCell(index);
                } });
        })
    );
};

var Cell = function Cell(props) {
    return React.createElement('td', { onClick: props.clickCell, className: props.item === props.players.playerOne ? 'pink' : props.item === props.players.playerTwo ? 'red' : 'white' });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJib2FyZCIsInBsYXllcnMiLCJwbGF5ZXJPbmUiLCJwbGF5ZXJUd28iLCJuZXdQbGF5ZXIiLCJwcmV2aW91c1BsYXllciIsIndpbm5lciIsImdldFBsYXllck9uZSIsImJpbmQiLCJnZXRQbGF5ZXJUd28iLCJjbGlja0NlbGwiLCJkZXRlY3RXaW5uZXIiLCJjaGVja1Jvd3MiLCJjaGVja0NvbHMiLCJjaGVja01ham9ycyIsImNoZWNrTWlub3JzIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxheWVyc0NvcHkiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJpZCIsImkiLCJsZW5ndGgiLCJjb3B5Ym9hcmQiLCJzbGljZSIsIndpbm5pbmdDb25kaXRpb24iLCJyb3ciLCJwdXNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbCIsImoiLCJtYWpvciIsIm1hcCIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSb3dzIiwiaXRlbSIsIkNlbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSw4R0FDUkEsS0FEUTs7QUFFZCxjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sQ0FDSCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBREcsRUFFSCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBRkcsRUFHSCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBSEcsRUFJSCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxF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LE9BQUtuQixTQUFqRixHQURrQjtBQUFBLHlCQUFyQjtBQURMO0FBREosaUJBUEo7QUFjSTtBQUFBO0FBQUE7QUFDRztBQUFBO0FBQUE7QUFBQTtBQUFpQiw2QkFBS1gsS0FBTCxDQUFXTztBQUE1QjtBQURIO0FBZEosYUFESjtBQW9CSDs7OztFQTVLYWdDLE1BQU1DLFM7O0FBK0t4Qjs7O0FBQ0EsSUFBSUMsT0FBTyxTQUFQQSxJQUFPLENBQUMxQyxLQUFEO0FBQUEsV0FDUDtBQUFBO0FBQUE7QUFDS0EsY0FBTStCLEdBQU4sQ0FBVU8sR0FBVixDQUFjLFVBQUNLLElBQUQsRUFBT0osS0FBUCxFQUFnQjtBQUMzQixtQkFBTyxvQkFBQyxJQUFELElBQU0sU0FBU3ZDLE1BQU1HLE9BQXJCLEVBQThCLEtBQUssU0FBU29DLEtBQTVDLEVBQW1ELE1BQU1JLElBQXpELEVBQStELFdBQVc7QUFBQSwyQkFBSzNDLE1BQU1ZLFNBQU4sQ0FBZ0IyQixLQUFoQixDQUFMO0FBQUEsaUJBQTFFLEdBQVA7QUFDSCxTQUZBO0FBREwsS0FETztBQUFBLENBQVg7O0FBU0EsSUFBSUssT0FBTyxTQUFQQSxJQUFPLENBQUM1QyxLQUFEO0FBQUEsV0FDUCw0QkFBSSxTQUFTQSxNQUFNWSxTQUFuQixFQUE4QixXQUFXWixNQUFNMkMsSUFBTixLQUFlM0MsTUFBTUcsT0FBTixDQUFjQyxTQUE3QixHQUF5QyxNQUF6QyxHQUFtREosTUFBTTJDLElBQU4sS0FBZTNDLE1BQU1HLE9BQU4sQ0FBY0UsU0FBN0IsR0FBeUMsS0FBekMsR0FBaUQsT0FBN0ksR0FETztBQUFBLENBQVgiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJvYXJkOiBbXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF1cbiAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgcGxheWVyczoge1xuICAgICAgICAgICAgICAgIHBsYXllck9uZTogJycsXG4gICAgICAgICAgICAgICAgcGxheWVyVHdvOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5ld1BsYXllcjogJycsXG4gICAgICAgICAgICBwcmV2aW91c1BsYXllcjogJycsXG4gICAgICAgICAgICB3aW5uZXI6ICcnXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0UGxheWVyT25lID0gdGhpcy5nZXRQbGF5ZXJPbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRQbGF5ZXJUd28gPSB0aGlzLmdldFBsYXllclR3by5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsaWNrQ2VsbCA9IHRoaXMuY2xpY2tDZWxsLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGV0ZWN0V2lubmVyID0gdGhpcy5kZXRlY3RXaW5uZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jaGVja1Jvd3MgPSB0aGlzLmNoZWNrUm93cy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNoZWNrQ29scyA9IHRoaXMuY2hlY2tDb2xzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tNYWpvcnMgPSB0aGlzLmNoZWNrTWFqb3JzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tNaW5vcnMgPSB0aGlzLmNoZWNrTWlub3JzLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJPbmUoZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubmV3UGxheWVyID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHZhciBwbGF5ZXJzQ29weSA9IHRoaXMuc3RhdGUucGxheWVycztcbiAgICAgICAgcGxheWVyc0NvcHkucGxheWVyT25lID0gdGhpcy5zdGF0ZS5uZXdQbGF5ZXIgXG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgb25lOicsIHBsYXllcnNDb3B5KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyczogcGxheWVyc0NvcHl9KTtcbiAgICB9XG5cbiAgICBnZXRQbGF5ZXJUd28oZSl7XG4gICAgICAgIHRoaXMuc3RhdGUubmV3UGxheWVyID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHZhciBwbGF5ZXJzQ29weSA9IHRoaXMuc3RhdGUucGxheWVycztcbiAgICAgICAgcGxheWVyc0NvcHkucGxheWVyVHdvID0gdGhpcy5zdGF0ZS5uZXdQbGF5ZXIgXG4gICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXIgdHdvOicsIHBsYXllcnNDb3B5KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGxheWVyczogcGxheWVyc0NvcHl9KTtcbiAgICB9XG5cbiAgICBjbGlja0NlbGwoaWQpe1xuICAgICAgICBjb25zb2xlLmxvZygnY29sOiAnLCBpZCk7XG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCB0aGUgY29sdW1uIGFuZCBjaGVjayBhbiBlbXB0eSBzcG90XG5cbiAgICAgICAgLy8gaWYodGhpcy5zdGF0ZS53aW5uZXIpe1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICAvLyBpZiB3aW5uZXIgd2FzIHBsYXllcm9uZSwgc2V0IHByZXZpb3VzcGxheWVyIHRvIHBsYXllcnR3bywgb3RoZXJ3aXNlLCBwcmV2aW91c3BsYXllciBpcyBwbGF5ZXJvbmVcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUucHJldmlvdXNQbGF5ZXIgPSAodGhpcy5zdGF0ZS53aW5uZXIgPT09IHRoaXMuc3RhdGUucGxheWVycy5wbGF5ZXJPbmUpID8gdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllclR3byA6IHRoaXMuc3RhdGUucGxheWVycy5wbGF5ZXJPbmU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gfSBlbHNlIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd3aW5uZXInKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc3RhdGUucHJldmlvdXNQbGF5ZXIgPSB0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyVHdvO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgZm9yKHZhciBpID0gdGhpcy5zdGF0ZS5ib2FyZC5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pe1xuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5ib2FyZFtpXVtpZF0gPT09IDApe1xuICAgICAgICAgICAgICAgIHZhciBjb3B5Ym9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5wcmV2aW91c1BsYXllciA9PT0gdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllck9uZSl7XG4gICAgICAgICAgICAgICAgICAgIGNvcHlib2FyZFtpXVtpZF0gPSB0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyVHdvO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnByZXZpb3VzUGxheWVyID0gdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllclR3bztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUucHJldmlvdXNQbGF5ZXIgPT09IHRoaXMuc3RhdGUucGxheWVycy5wbGF5ZXJUd28pe1xuICAgICAgICAgICAgICAgICAgICBjb3B5Ym9hcmRbaV1baWRdID0gdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllck9uZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wcmV2aW91c1BsYXllciA9IHRoaXMuc3RhdGUucGxheWVycy5wbGF5ZXJPbmU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29weWJvYXJkW2ldW2lkXSA9IHRoaXMuc3RhdGUucGxheWVycy5wbGF5ZXJPbmU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUucHJldmlvdXNQbGF5ZXIgPSB0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyT25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtib2FyZDogY29weWJvYXJkfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRldGVjdFdpbm5lcih0aGlzLnN0YXRlLmJvYXJkKTtcbiAgICB9XG5cbiAgICBkZXRlY3RXaW5uZXIoYm9hcmQpe1xuXG4gICAgICAgIHZhciB3aW5uaW5nQ29uZGl0aW9uID0ge1xuICAgICAgICAgICAgcGxheWVyT25lOiBbdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllck9uZSwgdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllck9uZSwgdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllck9uZSwgdGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllck9uZV0sXG4gICAgICAgICAgICBwbGF5ZXJUd286IFt0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyVHdvLCB0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyVHdvLCB0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyVHdvLCB0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyVHdvXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuY2hlY2tSb3dzKGJvYXJkLCB3aW5uaW5nQ29uZGl0aW9uKTtcbiAgICAgICAgdGhpcy5jaGVja0NvbHMoYm9hcmQsIHdpbm5pbmdDb25kaXRpb24pO1xuICAgICAgICAvL3RoaXMuY2hlY2tNYWpvcnMoYm9hcmQpO1xuICAgICAgICAvL2NoZWNrTWlub3JzKGJvYXJkKTtcblxuICAgIH1cblxuICAgIGNoZWNrUm93cyhib2FyZCwgd2lubmluZ0NvbmRpdGlvbil7XG4gICAgICAgIC8vIGNoZWNrIDAsIDEsIDIsIDMgICYmIDMsIDQsIDUsIDYgY29sdW1uc1xuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkgKyspe1xuICAgICAgICAgICAgdmFyIHJvdyA9IFtdO1xuICAgICAgICAgICAgcm93LnB1c2goYm9hcmRbaV1bMF0sIGJvYXJkW2ldWzFdLCBib2FyZFtpXVsyXSwgYm9hcmRbaV1bM10pO1xuICAgICAgICAgICAgICAgIGlmKEpTT04uc3RyaW5naWZ5KHJvdykgPT09IEpTT04uc3RyaW5naWZ5KHdpbm5pbmdDb25kaXRpb24ucGxheWVyT25lKSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpbm5lcjogYCR7dGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllck9uZX1gfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChKU09OLnN0cmluZ2lmeShyb3cpID09PSBKU09OLnN0cmluZ2lmeSh3aW5uaW5nQ29uZGl0aW9uLnBsYXllclR3bykpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aW5uZXI6IGAke3RoaXMuc3RhdGUucGxheWVycy5wbGF5ZXJUd299YH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByb3cgPSBbXTtcbiAgICAgICAgICAgIHJvdy5wdXNoKGJvYXJkW2ldWzNdLCBib2FyZFtpXVs0XSwgYm9hcmRbaV1bNV0sIGJvYXJkW2ldWzZdKTtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShyb3cpID09PSBKU09OLnN0cmluZ2lmeSh3aW5uaW5nQ29uZGl0aW9uLnBsYXllck9uZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgd2lubmVyOiBgJHt0aGlzLnN0YXRlLnBsYXllcnMucGxheWVyT25lfWAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEpTT04uc3RyaW5naWZ5KHJvdykgPT09IEpTT04uc3RyaW5naWZ5KHdpbm5pbmdDb25kaXRpb24ucGxheWVyVHdvKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aW5uZXI6IGAke3RoaXMuc3RhdGUucGxheWVycy5wbGF5ZXJUd299YCB9KTtcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0NvbHMoYm9hcmQsIHdpbm5pbmdDb25kaXRpb24pe1xuICAgICAgICAvLyBjaGVjayAyLCAzLCA0LCA1IHJvd3NcblxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYm9hcmRbMF0ubGVuZ3RoOyBpICsrKXtcbiAgICAgICAgICAgIHZhciBjb2wgPSBbXTtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IGJvYXJkLmxlbmd0aC0xOyBqID49IDI7IGotLSl7XG4gICAgICAgICAgICAgICAgY29sLnB1c2goYm9hcmRbal1baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNvbCkgPT09IEpTT04uc3RyaW5naWZ5KHdpbm5pbmdDb25kaXRpb24ucGxheWVyT25lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB3aW5uZXI6IGAke3RoaXMuc3RhdGUucGxheWVycy5wbGF5ZXJPbmV9YCB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoSlNPTi5zdHJpbmdpZnkoY29sKSA9PT0gSlNPTi5zdHJpbmdpZnkod2lubmluZ0NvbmRpdGlvbi5wbGF5ZXJUd28pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpbm5lcjogYCR7dGhpcy5zdGF0ZS5wbGF5ZXJzLnBsYXllclR3b31gIH0pO1xuICAgICAgICAgICAgfSAgIFxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja01ham9ycyhib2FyZCl7XG4gICAgICAgIC8vIGxhbmRpbmcgcG9pbnQgKHN0YXJ0aW5nIHBvaW50KSAtPiArMSBjb2wgLTEgcm93IFxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGJvYXJkWzBdLmxlbmd0aDsgaSsrICl7XG4gICAgICAgICAgICAgICAgdmFyIG1ham9yID0gW107XG4gICAgICAgICAgICAgICAgbWFqb3IucHVzaChib2FyZFtqXVtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgIH1cbiBcblxuICAgIGNoZWNrTWlub3JzKGJvYXJkKXtcblxuICAgIH1cbiAgICBcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgVG8gTW8ncyBDb25uZWN0IEZvdXI8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICBQbGF5ZXIgT25lIE5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSk9PiB0aGlzLmdldFBsYXllck9uZShlKX0+PC9pbnB1dD4gPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgUGxheWVyIFR3byBOYW1lOiA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17KGUpPT4gdGhpcy5nZXRQbGF5ZXJUd28oZSl9PjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9mb3JtPiAgICBcblxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYm9hcmQubWFwKChyb3csIGluZGV4KT0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd3MgcGxheWVycz17dGhpcy5zdGF0ZS5wbGF5ZXJzfSBrZXk9eydyb3cnICsgaW5kZXh9IHJvdz17cm93fSBjbGlja0NlbGw9e3RoaXMuY2xpY2tDZWxsfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICA8aDM+V2lubmVyIGlzLi4ue3RoaXMuc3RhdGUud2lubmVyfTwvaDM+ICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vIEVTNiBTeW50YXg6IGlmIHRoZXJlJ3MgYSBjdXJseSBicmFjZXMsIG1ha2Ugc3VyZSB0byBwdXQgJ3JldHVybicga2V5d29yZFxudmFyIFJvd3MgPSAocHJvcHMpID0+IChcbiAgICA8dHI+XG4gICAgICAgIHtwcm9wcy5yb3cubWFwKChpdGVtLCBpbmRleCk9PiB7XG4gICAgICAgICAgICByZXR1cm4gPENlbGwgcGxheWVycz17cHJvcHMucGxheWVyc30ga2V5PXsnY2VsbCcgKyBpbmRleH0gaXRlbT17aXRlbX0gY2xpY2tDZWxsPXsoKT0+IHByb3BzLmNsaWNrQ2VsbChpbmRleCl9Lz5cbiAgICAgICAgfSl9XG4gICAgPC90cj5cbik7XG5cblxudmFyIENlbGwgPSAocHJvcHMpID0+IChcbiAgICA8dGQgb25DbGljaz17cHJvcHMuY2xpY2tDZWxsfSBjbGFzc05hbWU9e3Byb3BzLml0ZW0gPT09IHByb3BzLnBsYXllcnMucGxheWVyT25lID8gJ3BpbmsnIDogKHByb3BzLml0ZW0gPT09IHByb3BzLnBsYXllcnMucGxheWVyVHdvID8gJ3JlZCcgOiAnd2hpdGUnKX0gPlxuICAgICAgICB7Lyoge3Byb3BzLml0ZW19ICovfVxuICAgIDwvdGQ+XG4pOyJdfQ==