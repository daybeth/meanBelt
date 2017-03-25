var app = angular.module('app', ['ngRoute', 'ngMessages']);
/* configuration for angular route */
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/index.html',
      controller: 'indexController'
    })
    .when('/dashboard', {
      templateUrl: '/partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/question/:id', {
      templateUrl: '/partials/show_question.html',
      controller: 'questionController'
    })
   .when('/question/:id/new_answer', {
      templateUrl: '/partials/new_answer.html',
      controller: 'answerController'
    })
   .when('/new_question', {
      templateUrl: '/partials/new_question.html',
      controller: 'questionController'
    })
    .otherwise({
      redirectTo: '/'
    });
});