var Reflux = require('reflux');

var TodoActions = Reflux.createActions([
    'loadItem',
    'addItem'
]);

module.exports = TodoActions;