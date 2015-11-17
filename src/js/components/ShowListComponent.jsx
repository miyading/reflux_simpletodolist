var React = require('react');
var Reflux = require('reflux');
var TodoAction = require('../actions/TodoAction.jsx');
var TodoStore = require('../stores/TodoStore.jsx');
var ItemRow = require('./ItemRow.jsx');

var ShowComponent = React.createClass({

    render: function () {
        return (
            <div>
                <ul>
                    {this.props.items.map(function(item, key) {
                        return (
                            <li key={key}>
                                <ItemRow item={item} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});

module.exports = ShowComponent;