var React = require('react');
var Reflux = require('reflux');
var TodoStore = require('../stores/TodoStore.jsx');
var TodoAction = require('../actions/TodoAction.jsx');

var AddComponent = React.createClass({

    onSubmit: function(event) {
        event.preventDefault();

        var val = React.findDOMNode(this.refs.inputText).value.trim();
        if (val) {
            TodoAction.addItem(val);
            React.findDOMNode(this.refs.inputText).value = '';
       }
    },

    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <input className="input-text" ref="inputText" />
                <input className="submit-button" type="submit" value="Add" />
            </form>
        );
    }
});


module.exports = AddComponent;