var app = angular.module('test', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeCtrl',
			templateUrl: 'js/views/home.html'
		})
		.when('/item/:id', {
			controller: 'ItemCtrl',
			templateUrl: 'js/views/item.html'
		})		
		.otherwise({
			redirectTo: '/'
		});
});