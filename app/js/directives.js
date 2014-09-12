'use strict';

angular.module('myApp.directives', [])

	.directive('howtoDirective', function() {
		return {
			restrict: 'A',
			templateUrl:'/partials/howto.html'
		};
	});


