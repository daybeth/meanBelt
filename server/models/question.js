var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
	content: {type: String, required:true},
	description: {type: String},
	_user: {type: Schema.Types.ObjectId, ref:'User'},
	answers:[{type:Schema.Types.ObjectId, ref:'Answer'}]
}, {timestamps:true});

mongoose.model('Question', QuestionSchema);