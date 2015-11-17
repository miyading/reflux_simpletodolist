var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    'loadItem',
    'addItem',
    'deleteItem'
]);

module.exports = TodoActions;