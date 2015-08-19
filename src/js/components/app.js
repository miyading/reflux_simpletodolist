var React = require('react');
var TodoList = require('./TodoList.jsx');

var APP = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            text: '',
            done: false,
            showSelectAll: false,
            listItemSelected: false
        };
    },

    onChange: function (e) {
        this.setState({text: e.target.value});
    },

    handleSubmit: function (e) {
        e.preventDefault();
        this.setState({showSelectAll: true});

        var nextItems = this.state.items.concat([this.state.text]);
        var nextText = '';
        this.setState({items: nextItems, text: nextText});
    },

    handleClick: function (index) {
        this.state.items.splice(index, 1);
        this.forceUpdate();
    },

    handleListItemSelected: function () {
    },

    render: function () {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}
                          handleListItemSelected={this.handleListItemSelected}
                          handleClick={this.handleClick}
                          showSelectAll={this.state.showSelectAll}/>

                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text}/>
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        );
    }
});

module.exports = APP;