app.controller('questionController',['$scope','$location', '$routeParams','QuestionFactory', function($scope, $location,$routeParams,QuestionFactory){
		$scope.addQuestion = function(question){
		// console.log('controller',question)
		QuestionFactory.addQuestion(question);
		$scope.newQuestion = {};
		$location.url('/dashboard');
	}
		function showQuestion(id){
		QuestionFactory.showQuestion(id,function(data){
			console.log(data)
			$scope.question = data;
		})
	}
	showQuestion($routeParams.id);

	$scope.addLike = function(answer_id){
		console.log("controller",answer_id)
		QuestionFactory.addLike(answer_id); 
		showQuestion($routeParams.id);
	}

}])