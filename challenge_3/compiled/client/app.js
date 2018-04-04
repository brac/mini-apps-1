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
            board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]
        };

        _this.clickCell = _this.clickCell.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'clickCell',
        value: function clickCell(id) {
            console.log('col: ', id);
            console.log('click!');
            // iterate through the column and check an empty spot
            for (var i = this.state.board.length - 1; i >= 0; i--) {
                console.log(this.state.board[i][id]);
                if (this.state.board[i][id] === 0) {
                    var copyboard = this.state.board.slice();
                    copyboard[i][id] = 1;
                    this.setState({ board: copyboard });
                    break;
                }
            }
        }
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
                    'table',
                    null,
                    React.createElement(
                        'tbody',
                        null,
                        this.state.board.map(function (row, index) {
                            return React.createElement(Rows, { cellId: _this2.state.cellId, rowId: 'row' + index, key: 'row' + index, row: row, clickCell: _this2.clickCell });
                        })
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
        { id: props.rowId },
        props.row.map(function (item, index) {
            return React.createElement(Cell, { cellId: 'cell' + index, key: 'cell' + index, item: item, clickCell: function clickCell() {
                    return props.clickCell(index);
                } });
        })
    );
};

var Cell = function Cell(props) {
    return React.createElement(
        'td',
        { id: props.cellId, onClick: props.clickCell },
        props.item
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJib2FyZCIsImNsaWNrQ2VsbCIsImJpbmQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiY29weWJvYXJkIiwic2xpY2UiLCJzZXRTdGF0ZSIsIm1hcCIsInJvdyIsImluZGV4IiwiY2VsbElkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSb3dzIiwicm93SWQiLCJpdGVtIiwiQ2VsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDRixpQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBLDhHQUNSQSxLQURROztBQUVkLGNBQUtDLEtBQUwsR0FBYTtBQUNUQyxtQkFBTyxDQUNILENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FERyxFQUVILENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FGRyxFQUdILENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FIRyxFQUlILENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FKRyxFQUtILENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FMRyxFQU1ILENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsQ0FORztBQURFLFNBQWI7O0FBV0EsY0FBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYsT0FBakI7QUFiYztBQWNqQjs7OztrQ0FFU0MsRSxFQUFHO0FBQ1RDLG9CQUFRQyxHQUFSLENBQVksT0FBWixFQUFxQkYsRUFBckI7QUFDQUMsb0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0E7QUFDQSxpQkFBSSxJQUFJQyxJQUFJLEtBQUtQLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQk8sTUFBakIsR0FBd0IsQ0FBcEMsRUFBdUNELEtBQUssQ0FBNUMsRUFBK0NBLEdBQS9DLEVBQW1EO0FBQy9DRix3QkFBUUMsR0FBUixDQUFZLEtBQUtOLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQk0sQ0FBakIsRUFBb0JILEVBQXBCLENBQVo7QUFDQSxvQkFBRyxLQUFLSixLQUFMLENBQVdDLEtBQVgsQ0FBaUJNLENBQWpCLEVBQW9CSCxFQUFwQixNQUE0QixDQUEvQixFQUFpQztBQUM3Qix3QkFBSUssWUFBWSxLQUFLVCxLQUFMLENBQVdDLEtBQVgsQ0FBaUJTLEtBQWpCLEVBQWhCO0FBQ0FELDhCQUFVRixDQUFWLEVBQWFILEVBQWIsSUFBbUIsQ0FBbkI7QUFDQSx5QkFBS08sUUFBTCxDQUFjLEVBQUNWLE9BQU9RLFNBQVIsRUFBZDtBQUNBO0FBQ0g7QUFDSjtBQUVKOzs7aUNBRVE7QUFBQTs7QUFDTCxtQkFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBRUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQ0ssNkJBQUtULEtBQUwsQ0FBV0MsS0FBWCxDQUFpQlcsR0FBakIsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFNQyxLQUFOO0FBQUEsbUNBQ2xCLG9CQUFDLElBQUQsSUFBTSxRQUFRLE9BQUtkLEtBQUwsQ0FBV2UsTUFBekIsRUFBaUMsT0FBTyxRQUFRRCxLQUFoRCxFQUF1RCxLQUFLLFFBQVFBLEtBQXBFLEVBQTJFLEtBQUtELEdBQWhGLEVBQXFGLFdBQVcsT0FBS1gsU0FBckcsR0FEa0I7QUFBQSx5QkFBckI7QUFETDtBQURKO0FBRkosYUFESjtBQVlIOzs7O0VBOUNhYyxNQUFNQyxTOztBQWlEeEI7OztBQUNBLElBQUlDLE9BQU8sU0FBUEEsSUFBTyxDQUFDbkIsS0FBRDtBQUFBLFdBQ1A7QUFBQTtBQUFBLFVBQUksSUFBSUEsTUFBTW9CLEtBQWQ7QUFDS3BCLGNBQU1jLEdBQU4sQ0FBVUQsR0FBVixDQUFjLFVBQUNRLElBQUQsRUFBT04sS0FBUCxFQUFnQjtBQUMzQixtQkFBTyxvQkFBQyxJQUFELElBQU0sUUFBUSxTQUFTQSxLQUF2QixFQUE4QixLQUFLLFNBQVNBLEtBQTVDLEVBQW1ELE1BQU1NLElBQXpELEVBQStELFdBQVc7QUFBQSwyQkFBS3JCLE1BQU1HLFNBQU4sQ0FBZ0JZLEtBQWhCLENBQUw7QUFBQSxpQkFBMUUsR0FBUDtBQUNILFNBRkE7QUFETCxLQURPO0FBQUEsQ0FBWDs7QUFTQSxJQUFJTyxPQUFPLFNBQVBBLElBQU8sQ0FBQ3RCLEtBQUQ7QUFBQSxXQUNQO0FBQUE7QUFBQSxVQUFJLElBQUlBLE1BQU1nQixNQUFkLEVBQXNCLFNBQVNoQixNQUFNRyxTQUFyQztBQUNLSCxjQUFNcUI7QUFEWCxLQURPO0FBQUEsQ0FBWCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYm9hcmQ6IFtcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwXVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGlja0NlbGwgPSB0aGlzLmNsaWNrQ2VsbC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNsaWNrQ2VsbChpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb2w6ICcsIGlkKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrIScpO1xuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggdGhlIGNvbHVtbiBhbmQgY2hlY2sgYW4gZW1wdHkgc3BvdFxuICAgICAgICBmb3IodmFyIGkgPSB0aGlzLnN0YXRlLmJvYXJkLmxlbmd0aC0xOyBpID49IDA7IGktLSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmJvYXJkW2ldW2lkXSk7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmJvYXJkW2ldW2lkXSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGNvcHlib2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICBjb3B5Ym9hcmRbaV1baWRdID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtib2FyZDogY29weWJvYXJkfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgVG8gTW8ncyBDb25uZWN0IEZvdXI8L2gxPlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYm9hcmQubWFwKChyb3csIGluZGV4KT0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJvd3MgY2VsbElkPXt0aGlzLnN0YXRlLmNlbGxJZH0gcm93SWQ9eydyb3cnICsgaW5kZXh9IGtleT17J3JvdycgKyBpbmRleH0gcm93PXtyb3d9IGNsaWNrQ2VsbD17dGhpcy5jbGlja0NlbGx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT4gICBcbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vIEVTNiBTeW50YXg6IGlmIHRoZXJlJ3MgYSBjdXJseSBicmFjZXMsIG1ha2Ugc3VyZSB0byBwdXQgJ3JldHVybicga2V5d29yZFxudmFyIFJvd3MgPSAocHJvcHMpID0+IChcbiAgICA8dHIgaWQ9e3Byb3BzLnJvd0lkfT5cbiAgICAgICAge3Byb3BzLnJvdy5tYXAoKGl0ZW0sIGluZGV4KT0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Q2VsbCBjZWxsSWQ9eydjZWxsJyArIGluZGV4fSBrZXk9eydjZWxsJyArIGluZGV4fSBpdGVtPXtpdGVtfSBjbGlja0NlbGw9eygpPT4gcHJvcHMuY2xpY2tDZWxsKGluZGV4KX0vPlxuICAgICAgICB9KX1cbiAgICA8L3RyPlxuKTtcblxuXG52YXIgQ2VsbCA9IChwcm9wcykgPT4gKFxuICAgIDx0ZCBpZD17cHJvcHMuY2VsbElkfSBvbkNsaWNrPXtwcm9wcy5jbGlja0NlbGx9ID5cbiAgICAgICAge3Byb3BzLml0ZW19XG4gICAgPC90ZD5cbik7Il19