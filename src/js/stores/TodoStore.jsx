var Reflux = require('reflux');
var TodoActions = require('../actions/TodoAction.jsx');

var TodoStore = Reflux.createStore({
    items: ["java", "c", "c++", "ruby"],

    init: function () {
        this.listenTo(TodoActions.addItem, this.onAddItem);
        this.trigger(this.items);
    },

    /*onShowItem: function () {
        return TodoStore.items;
    },*/

    onAddItem: function (item) {
        TodoStore.items.push(item);
        console.log("ding " + this.items);
        this.trigger(this.items);
    }
});

module.exports = TodoStore;