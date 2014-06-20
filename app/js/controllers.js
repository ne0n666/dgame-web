'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.packs = [1,2,3];
  	$scope.currentCard = 0;
  	var random;
  	$scope.draw = function(){
  		random = (Math.floor(Math.random()*10))%3;
  		$scope.currentCard = $scope.packs[random];
  		console.log(random + " " + $scope.currentCard);
  	}
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
