var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref:'User'},
	comment: {type: String, required:true}
}, {timestamps:true});

mongoose.model('Comment', CommentSchema);
