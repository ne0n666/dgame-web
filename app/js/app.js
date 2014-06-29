'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/play', {templateUrl: 'partials/play.html', controller: 'PlayController'});
  $routeProvider.otherwise({redirectTo: '/play'});
}]);
