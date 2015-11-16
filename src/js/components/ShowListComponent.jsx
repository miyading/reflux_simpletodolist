var React = require('react');
var Reflux = require('reflux');
var TodoAction = require('../actions/TodoAction.jsx');
var TodoStore = require('../stores/TodoStore.jsx');

var ShowComponent = React.createClass({

    render: function () {
        return (
            <div>
                {TodoStore.items.map(function (item, key) {
                    return (
                    <p key={key}>
                        <input type="checkbox" />
                        {item}
                    </p>
                    );
                })}
            </div>
        )
    }
});

module.exports = ShowComponent;