app.controller('dashboardController',['$scope', '$routeParams','TopicFactory', function($scope,$routeParams,TopicFactory){
	function currentUser(){
		TopicFactory.currentUser(function(data){
			$scope.user = data;
		});
	}
	currentUser();

	function getTopics(){
		TopicFactory.getTopics(function(data){
			console.log(data)
			$scope.topics = data;
		})
	}
	getTopics();

	$scope.addTopic = function(topic){
		// console.log('controller',topic)
		TopicFactory.addTopic(topic,getTopics);
		$scope.newTopic = {};
	}
}])