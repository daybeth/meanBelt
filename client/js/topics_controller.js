app.controller('topicController',['$scope', '$routeParams','TopicFactory', function($scope,$routeParams,TopicFactory){
	function showTopic(id){
		TopicFactory.showTopic(id,function(data){
			console.log(data)
			$scope.topic = data;
		})
	}
	showTopic($routeParams.id);

	$scope.addAnswer = function(answer, topic_id){
		// console.log('controller',topic)
		TopicFactory.addAnswer(answer,topic_id);
		$scope.newAnswer = {};
		showTopic($routeParams.id);
	}
	$scope.addComment = function(comment, answer_id){
		// console.log('controller',topic)
		TopicFactory.addComment(comment,answer_id);
		$scope.newComment = {};
		showTopic($routeParams.id);
	}

}])