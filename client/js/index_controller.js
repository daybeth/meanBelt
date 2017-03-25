app.controller('indexController',['$scope', '$routeParams','QuestionFactory', function($scope,$routeParams,QuestionFactory){
	$scope.register = function(user){
		QuestionFactory.register(user);
	}
	$scope.login = function(user){
		QuestionFactory.login(user);
	}
	
	$scope.logout = function(user){
		QuestionFactory.logout(user);
	}
}])