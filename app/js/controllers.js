'use strict';

angular.module('myApp.controllers', [])
  .controller('PlayController', ['$scope', function($scope) {
    var colors = ["#f3ce0e", "#56af34", "#123456", "#dad990", "#428def", "#12ad6f", "#b83d3d", "#5bc8b0", "#3a5c1f", "#184936", "#4f82c4", "#286077", "#4a1d48", "#c3654b", "#c4994f", "#7353c6", "#d0cb71", "#c25047"];
    var titles;
    var descriptions;
    var random;
    var getData = function(lang){
      $("#"+$scope.currLang).attr("class","inlinelist unsel");
      console.log("#"+lang);
      $("#"+lang).attr("class","inlinelist sel");
      var path = "data/"+lang+".json";
      $.getJSON(path, function(data){
        titles = data.titles;
        descriptions = data.descriptions;
      })
    };
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
    $scope.changeLanguage = function(lang){
      getData(lang);
      $scope.currLang=lang;
    }

    $scope.cardtitle = "First taste!";
    $scope.carddesc = "Everyone takes a sip to get ready for THE GAME! Click this box to continue...";
    $scope.currLang;
    $scope.hidehelp = true;
    $scope.hidesetts = true;
    $scope.cardcount = 0;
    $scope.changeLanguage("English");

  	
  }]);
