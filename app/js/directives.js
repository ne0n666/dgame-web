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
	})
	.directive('onoffDirective', function() {
		return {
			restrict: 'A',
			template:'<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked><label class="onoffswitch-label" for="myonoffswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>'
		};
	});


