var serverController = require('./../controller/server_controller.js');
module.exports = function(app) {

	app.post('/login', serverController.login);
	app.post('/register', serverController.register);
	app.get('/logout', serverController.logout);
	app.get('/current', serverController.current);

	app.get('/dashboard', serverController.getTopics);
	app.post('/topic', serverController.addTopic);

	app.get('/topic/:id', serverController.showTopic);
	app.post('/answer/:topic_id', serverController.addAnswer);
	// app.get('/answers', serverController.getAnswers);
	app.post('/comment/:answer_id', serverController.addComment);
	// app.get('/comments/:answer_id', serverController.getComments);


	app.get('/user/:id', serverController.showUser);
	app.get('/topiccount/:id', serverController.topicCount);
	app.get('/answercount/:id', serverController.answerCount);
	app.get('/commentcount/:id', serverController.commentCount);

}