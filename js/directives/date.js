app.directive('date', function() {
	return {
		restrict: 'E',
		scope: {},
	    templateUrl: 'js/directives/date.html',
	    link: function(scope, element, attrs) { 
	    	scope.date = new Date();
	    }
	};
});