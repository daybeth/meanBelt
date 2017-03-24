app.factory('TopicFactory', ['$http', '$location', function($http,$location){
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
	factory.addTopic = function(topic,callback){
		console.log("factory",topic)
		$http({
			url:'/topic',
			method: 'POST',
			data: topic
		}).then(function(res){
			console.log(res);
			callback();
		}, function(res){
			console.log(res);
		})
	};
	factory.getTopics = function(callback){
		$http({
			url: '/dashboard',
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res)
		},function(res){
			console.log(res)
		})
	}
	factory.showTopic = function(id,callback){
		$http({
			url: '/topic/'+id,
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res)
		},function(res){
			console.log(res)
		})
	}
	factory.addAnswer = function(answer,topic_id){
		console.log("factory",answer)
		$http({
			url:'/answer/'+ topic_id,
			method: 'POST',
			data: answer
		}).then(function(res){
			console.log(res);
			// callback();
		}, function(res){
			console.log(res);
		})
	};
	factory.addComment = function(comment,answer_id){
		console.log("factory",comment)
		$http({
			url:'/comment/'+ answer_id,
			method: 'POST',
			data: comment
		}).then(function(res){
			console.log(res);
			// callback();
		}, function(res){
			console.log(res);
		})
	};
	factory.showUser = function(id,callback){
		$http({
			url: '/user/'+id,
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res)
		},function(res){
			console.log(res)
		})
		
	}
	factory.topicCount = function(id,callback){
		$http({
			url: '/topiccount/'+id,
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res)
		},function(res){
			console.log(res)
		})
	}
	factory.answerCount = function(id,callback){
		$http({
			url: '/answercount/'+id,
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res)
		},function(res){
			console.log(res)
		})
	}
	factory.commentCount = function(id,callback){
		$http({
			url: '/commentcount/'+id,
			method: 'GET'
		}).then(function(res){
			callback(res.data);
			console.log(res)
		},function(res){
			console.log(res)
		})
	}

	return factory;
}])
