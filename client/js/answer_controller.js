app.controller('answerController',['$location','$scope', '$routeParams','QuestionFactory', function($location,$scope,$routeParams,QuestionFactory){
	function showQuestion(id){
		QuestionFactory.showQuestion(id,function(data){
			$scope.question = data;
		})
	}
	showQuestion($routeParams.id);
    
	$scope.addAnswer = function(answer, question_id){
		console.log(question_id)
		QuestionFactory.addAnswer(answer,question_id);
		$scope.newAnswer = {};
		showQuestion($routeParams.id);
		$location.url('/dashboard');
	}
}])