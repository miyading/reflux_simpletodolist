var React = require('react');
var TodoStore = require('../stores/TodoStore.jsx');
var TodoAction = require('../actions/TodoAction.jsx');
var ShowComponent = require('./ShowListComponent.jsx');
var AddComponent = require('./AddToListComponent.jsx');
var Reflux = require('reflux');

var App = React.createClass({

    mixins: [Reflux.connect(TodoStore, "items")],

    addItem: function(text) {
        TodoAction.addItem.trigger(text);
    },

    render: function () {
        return (
            <div>
                <h1>To Do List</h1>
                <AddComponent addItem={this.addItem} />
                <ShowComponent items={this.state.items}/>
            </div>
        );
    }
});

module.exports = App;