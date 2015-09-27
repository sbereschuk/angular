app.controller('HomeCtrl', ['$scope', 'data', function($scope, data) {
	data.success(function(data) {
		$scope.items = data;
	});
}]);