var Reflux = require('reflux');
var TodoActions = require('../actions/TodoAction.jsx');

var TodoStore = Reflux.createStore({
    items: ["java", "c", "c++", "ruby"],

    init: function () {
        this.listenTo(TodoActions.loadItem, this.onLoadItem);
        this.listenTo(TodoActions.addItem, this.onAddItem);
        this.trigger(this.items);
    },

    onLoadItem: function() {
        this.trigger(this.items);
        return this.items;
    },

    onAddItem: function (item) {
        this.items.push(item);
        this.trigger(this.items);
    }
});

module.exports = TodoStore;