// require mongoose
var mongoose = require('mongoose');
// create the schema
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {type:String, require:true},
	email:{type:String, required: true, unique:true}
},{timestamps:true});
// register the schema as a model
mongoose.model('User', UserSchema);



