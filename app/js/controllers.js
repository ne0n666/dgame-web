'use strict';

angular.module('myApp.controllers', [])
  .controller('PlayController', ['$scope', function($scope) {
    var colors = ["#56af34","#123456", '#dad990', '#428def', '#12ad6f', '#b83d3d', '#5bc8b0', '#3a5c1f', '#184936', '#4f82c4', '#286077', '#4a1d48', '#c3654b', '#c4994f', '#7353c6', '#d0cb71', '#c25047'];
  	var titles = ["Take 1", "Give 4", "Give 2", "Guys drink", "Ladies drink", "Everyone drinks", "New rule", "Pick a mate", "Rhymes", "Boom", "Never have I ever...", "Categories", "Waterfalls", "Fuzzy Duck", "Just DANCE!", "Hands UP!", "Questions", "Let's go camping", "Rock, paper scissors", "Puzzle", "Fast ABCs", "Kalodont", "Who sh*t?", "Sentences", "Stop - Go", "Thumper!", "Truth or Dare", "Sing for the Moment!"];
    var descriptions = ["Take a sip!", "Divide 4 sips among other players!", "Divide 2 sips among other players!", "All the guys take a sip.", "All the ladies take a sip.", "Everyone takes a sip.", "Choose a new rule that everyone must follow!", "Choose a person to join you (and your previous mates). He drinks whenever you drink.", "Everyone names a word that rhymes with yours.", "Pick a number, take turns counting but replacing that number with BOOM.", "You pick something you have never done. Everyone who has done it has to drink.", "You pick a category, everyone has to name something from it.", "Everyone starts drinking. You stop drinking when you want to, but others are not allowed to stop until the person before them has.", "Play the game Fuzzy Duck!", "The last person to start dancing has to drink.", "The last person to raise his hand has to drink.", "Look someone in the eyes and ask him a random question without laughing. They must respond with another question and so on until someone makes a mistake.", "Think of a place. Others must guess the place by naming things you would find there. If the thing they name can't be found at the place, they drink, if it can, they don't. It goes around until someone guesses the place.", "Everyone plays RPS at once! The majority wins - if 3 people show rock, 2 paper and 2 scissors, the scissors people are out and take a sip.", "Play either the Green Glass Door, Who has the Hat? or the Perfect Circle", "You say a word beginning with A. The next person has to come up with a word beginning with B within 5 seconds. Next C, D...", "Everyone names a word beginning with the last two letters of the previous player's word. If a player can't think of a word, he looses. If a player says a word ending with KA, the next person must say KALODONT, to make the player loose. If he/she doesn't say KALODONT, he looses.", "Each person picks an object. This is now their first name, everyone's last name is Shit. The first player says: 'The queen of whores has shit her drawers, and [first name of a player] has to clean them!' The player who was named replies: 'BULLSHIT!', to which the first player says: 'WHO SHIT?'. It goes on until someone messes up, at which point everyone yells DRINK MOTHERFUCKER, DRINK!", "You make a sentence, each player adding one word. If someone can't think of a word, is laughing too hard to say one, or the word doesn't make sense, he looses.", "The first person looks in the direction he wants and says GO. The player he looked at can say GO and it goes on, or say STOP to reverse the direction. After the first player, people can look in any direction, to throw others off.", "Everyone chooses a short hand gesture to represent them. Together, you start drumming on the table and the first person says WHAT'S THE NAME OF THE GAME? Everyone replyes THUMPER, THUMPER!, the leader: AND WHY DO WE PLAY THE GAME? response: TO GET FUCKED UP. the leader then shows his gesture, followed by another player's gesture, who again shows his own and then someone elses gesture and it goes on.", "The player chooses whether he would like to be asked a question, to which he must reply truthfully, or he will perform a dare. The other players then come up with a question or dare.", "You must sing (or rap) the first song that pops to your mind for a couple of seconds."];
    $scope.hidehelp=true;
    $scope.hidesetts=true;
    $scope.cardcount=0;
    $scope.cardtitle = "First taste!";
    $scope.carddesc = "Everyone takes a sip to get ready for THE GAME!";
  	var random;
    console.log(titles.length);
  	$scope.draw = function(){
  		random = (Math.floor(Math.random()*100));
      document.getElementById('body').style.background = colors[random%colors.length];
      var card=random%titles.length;
  		$scope.cardtitle = titles[card];
      $scope.carddesc = descriptions[card]
      $scope.cardcount++;
  	}
    $scope.switchhelp = function(){
      if($scope.hidehelp == true) $scope.hidehelp=false;
      else $scope.hidehelp=true;
      if($scope.hidesetts == false) $scope.hidesetts=true;
    }
    $scope.switchsetts = function(){
      if($scope.hidesetts == true) $scope.hidesetts=false;
      else $scope.hidesetts=true;
      if($scope.hidehelp == false) $scope.hidehelp=true;
    }
  }]);
