var Reflux = require('reflux');
var TodoActions = require('../actions/TodoAction.jsx');

var TodoStore = Reflux.createStore({
    items: ["java", "c", "c++", "ruby"],

    init: function () {
        this.listenTo(TodoActions.loadItem, this.onLoadItem);
        this.listenTo(TodoActions.addItem, this.onAddItem);
        this.listenTo(TodoActions.deleteItem, this.onDeleteItem);
        this.trigger(this.items);
    },

    onLoadItem: function() {
        this.trigger(this.items);
    },

    onAddItem: function (item) {
        this.items.push(item);
        this.trigger(this.items);
    },

    onDeleteItem: function(item) {
        var itemIndex = this.items.indexOf(item);
        this.items.splice(itemIndex, 1);
        this.trigger(this.items);
    }
});

module.exports = TodoStore;