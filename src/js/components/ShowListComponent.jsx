var React = require('react');
var Reflux = require('reflux');
var TodoAction = require('../actions/TodoAction.jsx');
var TodoStore = require('../stores/TodoStore.jsx');

var ShowComponent = React.createClass({

    getInitialState: function () {
        return {
            items: this.props.items
        }
    },

    onChange: function (key, e) {
        /*this.props.items.map(function(item) {
             item.setState(e.target.value)
        });*/
        var newItems = this.state.items;
        newItems[key] = e.target.value;
        console.log("ding "+ e.target.value);

        this.setState({items: newItems});
    },

    deleteIcon: function (key, evt) {
        this.props.items.splice(key, 1);
        this.forceUpdate();
    },

    render: function () {
        var that = this;
        return (
            <div>
                <ul>
                    {that.state.items.map(function(item, key) {
                        return (
                            <li key={key}>
                                <input type="checkbox"/>
                                <input value={item} onChange={that.onChange.bind(that, key)}/>
                                    <span className="delete-icon" onClick={that.deleteIcon.bind(that, key)}>&nbsp;&nbsp;
                                        delete</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});

module.exports = ShowComponent;