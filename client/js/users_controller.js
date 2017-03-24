app.controller('usersController',['$scope', '$routeParams','TopicFactory', function($scope,$routeParams,TopicFactory){
	function showUser(id){
		TopicFactory.showUser(id,function(data){
			$scope.user = data;
		})
		TopicFactory.topicCount(id, function(data){
            $scope.topicCount = data;
        })
        TopicFactory.answerCount(id, function(data){
            $scope.answerCount = data;
        })
        TopicFactory.commentCount(id, function(data){
            $scope.commentCount = data;
        })
  	}
	showUser($routeParams.id);
}])