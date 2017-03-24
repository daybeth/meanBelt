app.controller('indexController',['$scope', '$routeParams','TopicFactory', function($scope,$routeParams,TopicFactory){
	$scope.register = function(user){
		TopicFactory.register(user);
	}
	$scope.login = function(user){
		TopicFactory.login(user);
	}
	
	$scope.logout = function(user){
		TopicFactory.logout(user);
	}
}])