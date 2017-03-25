app.factory('QuestionFactory', ['$http', '$location', function($http,$location){
	var factory = {};
	factory.register = function(user){
		$http({
			url: '/register',
			method: "POST",
			data:user
		}).then(function(res){
			$location.url('/dashboard')
		}, function(res){
			console.log(res)
		})
	}
	factory.currentUser = function(callback){
		$http({
			url: '/current',
			method: "GET"
		}).then(function(res){
			callback(res.data)
		}, function(res){
			$location.url('/')
		})
	}
	factory.login = function(user){
		$http({
			url: '/login',
			method: "POST",
			data:user
		}).then(function(res){
			$location.url('/dashboard')
			console.log(res)
		}, function(res){
			console.log(res)
		})
	}
	factory.addQuestion = function(question){
		console.log("factory",question)
		$http({
			url:'/question',
			method: 'POST',
			data: question
		}).then(function(res){
			console.log(res);
		}, function(res){
			console.log(res);
		})
	};
	factory.getQuestions = function(callback){
		$http({
			url: '/dashboard',
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res)
		},function(res){
			console.log(res)
		})
	};
	factory.showQuestion = function(id,callback){
		$http({
			url: '/question/'+id,
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res)
		},function(res){
			console.log(res)
		})
	},
	factory.addAnswer = function(answer,question_id){
		$http({
			url:'/answer/'+ question_id,
			method: 'POST',
			data: answer
		}).then(function(res){
			console.log(res);
		}, function(res){
			console.log(res);
		})
	};
	factory.addLike = function(answer_id){
	console.log("factory",answer_id)				
		$http({
			url: '/likes/'+ answer_id,
			method: 'PUT'
		}).then(function(res){
			console.log(res)
		},function(res){
			console.log(res)
		})
	}

	return factory;
}])
