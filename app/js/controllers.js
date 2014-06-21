'use strict';

angular.module('myApp.controllers', [])
  .controller('PlayController', ['$scope', function($scope) {
    var colors = ["#56af34","#123456", '#dad990', '#b83d3d', '#5bc8b0', '#3a5c1f', '#184936', '#4f82c4', '#286077', '#4a1d48', '#c3654b', '#c4994f', '#7353c6', '#d0cb71', '#c25047'];
  	var titles = ["Take 1", "Give 1", "Give 2", "Guys drink", "Ladies drink", "Everyone drinks", "New rule", "Pick a mate", "Rhymes", "Boom", "Never have I ever...", "Categories", "Fountain", "Fuzzy Duck", "Just DANCE!", "Hands UP!", "Questions"];
    var descriptions = ["Take a sip!", "Choose a person to take a sip!", "Divide 2 sips among other players!", "All the guys take a sip.", "All the ladies take a sip.", "Everyone takes a sip.", "Choose a new rule that everyone must follow!", "Choose a person to join you (and your previous mates). He drinks whenever you drink.", "Everyone names a word that rhymes with yours.", "Pick a number, take turns counting but replacing that number with BOOM.", "You pick something you have never done. Everyone who has done it has to drink.", "You pick a category, everyone has to name something from it.", "Everyone starts drinking. You stop drinking when you want to, but others are not allowed to stop until the person before them has.", "Play the game Fuzzy Duck!", "The last person to start dancing has to drink.", "The last person to raise his hand has to drink.", "Look someone in the eyes and ask him a random question without laughing. They must respond with another question and so on until someone makes a mistake."];
    $scope.showhelp=false;
    $scope.cardcount=0;
    $scope.cardtitle = "First taste!";
    $scope.carddesc = "Everyone takes a sip to get ready for THE GAME!";
  	var random;
  	$scope.draw = function(){
  		random = (Math.floor(Math.random()*100));
      document.getElementById('body').style.background = colors[random%colors.length];
      var card=random%titles.length;
  		$scope.cardtitle = titles[card];
      $scope.carddesc = descriptions[card]
      $scope.cardcount++;
  	}
    $scope.gethelp = function(){
      $scope.showhelp=true;
    }
  }]);
