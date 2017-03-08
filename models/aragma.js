
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var aragmaSchema   = new Schema({
    name: String,
	location: String
});

module.exports = mongoose.model('Aragmatiki', aragmaSchema);