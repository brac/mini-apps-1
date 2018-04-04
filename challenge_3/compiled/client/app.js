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

        _this.clickCell = _this.clickCell.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'clickCell',
        value: function clickCell(e) {
            console.log(e.target.innerText);
            console.log('click!');
            var value = e.target.innerText;
            e.target.innerText = '1';
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
                        this.props.board.map(function (row) {
                            return React.createElement(Rows, { key: row[0], row: row, clickCell: _this2.clickCell });
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
        null,
        props.row.map(function (item) {

            return React.createElement(Cell, { key: item, item: item, clickCell: props.clickCell });
        })
    );
};

var Cell = function Cell(props) {
    return React.createElement(
        'td',
        { onClick: function onClick(e) {
                return props.clickCell(e);
            } },
        props.item
    );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwiY2xpY2tDZWxsIiwiYmluZCIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiaW5uZXJUZXh0IiwidmFsdWUiLCJib2FyZCIsIm1hcCIsInJvdyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUm93cyIsIml0ZW0iLCJDZWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNGLGlCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsOEdBQ1JBLEtBRFE7O0FBRWQsY0FBS0MsU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVDLElBQWYsT0FBakI7QUFGYztBQUdqQjs7OztrQ0FFU0MsQyxFQUFFO0FBQ1JDLG9CQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQUYsQ0FBU0MsU0FBckI7QUFDQUgsb0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsZ0JBQUlHLFFBQVFMLEVBQUVHLE1BQUYsQ0FBU0MsU0FBckI7QUFDQUosY0FBRUcsTUFBRixDQUFTQyxTQUFULEdBQXFCLEdBQXJCO0FBQ0g7OztpQ0FFUTtBQUFBOztBQUNMLG1CQUNJO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFFSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFDSyw2QkFBS1AsS0FBTCxDQUFXUyxLQUFYLENBQWlCQyxHQUFqQixDQUFxQixVQUFDQyxHQUFEO0FBQUEsbUNBQ2xCLG9CQUFDLElBQUQsSUFBTSxLQUFLQSxJQUFJLENBQUosQ0FBWCxFQUFtQixLQUFLQSxHQUF4QixFQUE2QixXQUFXLE9BQUtWLFNBQTdDLEdBRGtCO0FBQUEseUJBQXJCO0FBREw7QUFESjtBQUZKLGFBREo7QUFZSDs7OztFQTFCYVcsTUFBTUMsUzs7QUE2QnhCOzs7QUFDQSxJQUFJQyxPQUFPLFNBQVBBLElBQU8sQ0FBQ2QsS0FBRDtBQUFBLFdBQ1A7QUFBQTtBQUFBO0FBQ0tBLGNBQU1XLEdBQU4sQ0FBVUQsR0FBVixDQUFjLFVBQUNLLElBQUQsRUFBUzs7QUFFcEIsbUJBQU8sb0JBQUMsSUFBRCxJQUFNLEtBQUtBLElBQVgsRUFBaUIsTUFBTUEsSUFBdkIsRUFBNkIsV0FBV2YsTUFBTUMsU0FBOUMsR0FBUDtBQUNILFNBSEE7QUFETCxLQURPO0FBQUEsQ0FBWDs7QUFVQSxJQUFJZSxPQUFPLFNBQVBBLElBQU8sQ0FBQ2hCLEtBQUQ7QUFBQSxXQUNQO0FBQUE7QUFBQSxVQUFJLFNBQVMsaUJBQUNHLENBQUQ7QUFBQSx1QkFBS0gsTUFBTUMsU0FBTixDQUFnQkUsQ0FBaEIsQ0FBTDtBQUFBLGFBQWI7QUFDS0gsY0FBTWU7QUFEWCxLQURPO0FBQUEsQ0FBWCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmNsaWNrQ2VsbCA9IHRoaXMuY2xpY2tDZWxsLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY2xpY2tDZWxsKGUpe1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2shJyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJzEnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUgVG8gTW8ncyBDb25uZWN0IEZvdXI8L2gxPlxuICAgICAgICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYm9hcmQubWFwKChyb3cpPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um93cyBrZXk9e3Jvd1swXX0gcm93PXtyb3d9IGNsaWNrQ2VsbD17dGhpcy5jbGlja0NlbGx9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT4gICBcbiAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgKTtcbiAgICB9XG59XG5cbi8vIEVTNiBTeW50YXg6IGlmIHRoZXJlJ3MgYSBjdXJseSBicmFjZXMsIG1ha2Ugc3VyZSB0byBwdXQgJ3JldHVybicga2V5d29yZFxudmFyIFJvd3MgPSAocHJvcHMpID0+IChcbiAgICA8dHI+XG4gICAgICAgIHtwcm9wcy5yb3cubWFwKChpdGVtKT0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIDxDZWxsIGtleT17aXRlbX0gaXRlbT17aXRlbX0gY2xpY2tDZWxsPXtwcm9wcy5jbGlja0NlbGx9Lz5cbiAgICAgICAgfSl9XG4gICAgPC90cj5cbik7XG5cblxudmFyIENlbGwgPSAocHJvcHMpID0+IChcbiAgICA8dGQgb25DbGljaz17KGUpPT5wcm9wcy5jbGlja0NlbGwoZSl9PlxuICAgICAgICB7cHJvcHMuaXRlbX1cbiAgICA8L3RkPlxuKTsiXX0=