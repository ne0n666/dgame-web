'use strict';

angular.module('myApp.directives', [])

	.directive('helpDirective', function() {
		return {
			restrict: 'A',
			templateUrl:'/partials/help.html'
		};
	})
	.directive('settDirective', function() {
		return {
			restrict: 'A',
			templateUrl:'/partials/settings.html'
		};
	});


