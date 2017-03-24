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
    .when('/topic/:id', {
      templateUrl: '/partials/show_topic.html',
      controller: 'topicController'
    })
   .when('/user/:id', {
      templateUrl: '/partials/show_user.html',
      controller: 'usersController'
    })
    .otherwise({
      redirectTo: '/'
    });
});