var React = require('react');
var TodoAction = require('../actions/TodoAction.jsx');

var ItemRow = React.createClass({

    getInitialState: function () {
        return {
            item: this.props.item,
            delete: false
        }
    },

    componentWillReceiveProps: function (nextProps) {
        this.setState({
            item: nextProps.item
        })
    },

    onChange: function (event) {
        this.setState({
            item: event.target.value
        })
    },

    deleteIcon: function (event) {
        //TodoAction.deleteItem(this.props.item);
        this.setState({
            delete: true
        });
    },

    render: function () {
        return (
            <div>
                <input type="checkbox"/>
                <input value={this.state.item} onChange={this.onChange}
                       className={this.state.delete ? "delete-item" : " "}/>
                <span className="delete-icon" onClick={this.deleteIcon}>&nbsp;&nbsp;
                    delete</span>
            </div>
        );
    }
});

module.exports = ItemRow;