app.controller('ItemCtrl', ['$scope', '$routeParams', 'data', function($scope, $routeParams, data) {
	//console.log($routeParams.id);
	data.success(function(data) {
		$scope.item = data[$routeParams.id];
	});
}]);