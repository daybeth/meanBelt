var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	content: {type: String, required:true},
	support: {type: String},
	likes: {type:Number, required: true},
	user: {type: Schema.Types.ObjectId, ref:'User'}
}, {timestamps:true});

mongoose.model('Answer', AnswerSchema);