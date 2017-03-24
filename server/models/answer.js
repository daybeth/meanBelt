var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	answer: {type: String, required:true},
	upvotes: {type:Number, required: true},
    downvotes: {type:Number, required: true},
	user: {type: Schema.Types.ObjectId, ref:'User'},
	comments:[{type: Schema.Types.ObjectId, ref:'Comment'}]
}, {timestamps:true});

mongoose.model('Answer', AnswerSchema);