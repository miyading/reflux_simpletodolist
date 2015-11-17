var React = require('react');
var TodoStore = require('../stores/TodoStore.jsx');
var TodoAction = require('../actions/TodoAction.jsx');
var ShowComponent = require('./ShowListComponent.jsx');
var AddComponent = require('./AddToListComponent.jsx');
var Reflux = require('reflux');

var App = React.createClass({

    mixins: [Reflux.listenTo(TodoStore, "onItemsChange")],

    getInitialState: function () {
        return {
            items: []
        }
    },

    onItemsChange: function () {
        this.setState({
            items: TodoStore.items
        })
    },

    render: function () {
        return (
            <div>
                <h1>To Do List</h1>
                <AddComponent />
                <ShowComponent items={TodoStore.items}/>
            </div>
        );
    }
});

module.exports = App;