var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
	user: {type: Schema.Types.ObjectId, ref:'User'},
	topic: {type: String, required:true},
	description: {type: String, required:true},
	category: {type: String, required:true},
	answers:[{type:Schema.Types.ObjectId, ref:'Answer'}]
}, {timestamps:true});

mongoose.model('Topic', TopicSchema);