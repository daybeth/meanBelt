app.controller('dashboardController',['$scope', '$routeParams','QuestionFactory', function($scope,$routeParams,QuestionFactory){
	function currentUser(){
		QuestionFactory.currentUser(function(data){
			$scope.user = data;
		});
	}
	currentUser();
	function getQuestions(){
		QuestionFactory.getQuestions(function(data){
			console.log(data)
			$scope.questions = data;
		})
	}
	getQuestions();


}])