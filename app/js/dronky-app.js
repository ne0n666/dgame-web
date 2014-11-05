'use strict';

angular.module('myApp', ['ngRoute','myApp.controllers'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/play', {templateUrl: 'partials/main.html', controller: 'PlayController'});
    $routeProvider.when('/puzzles', {templateUrl: 'partials/puzzles.html', controller: 'PlayController'});
    $routeProvider.otherwise({redirectTo: '/play'});
  }]);

angular.module('myApp.controllers', [])
  .controller('PlayController', ['$scope', '$sce', function($scope, $sce) {
    var colors = ["#f3ce0e", "#56af34", "#123456", "#dad990", "#428def", "#12ad6f", "#b83d3d", "#5bc8b0", "#3a5c1f", "#184936", "#4f82c4", "#286077", "#4a1d48", "#c3654b", "#c4994f", "#7353c6", "#d0cb71", "#c25047"];
    var random;
    //gets data for selected language from .json
    var getData = function(lang){
      var path = "data/"+lang+".json";
      $.getJSON(path, function(data){
        $scope.titles = data.titles;
        $scope.descriptions = data.descriptions;
        $scope.help = data.help;
        $scope.howto = data.howto;
        var i;
        for(i=0;i<$scope.help.length;i++){
          $scope.help[i] = $sce.trustAsHtml($scope.help[i]);
          console.log($scope.help[i]);
        }
      })
    };
    /* detecting spacebar keypress */
    document.onkeydown = checkKey;
    function checkKey(e){
      e = e || window.event;
      if($scope.currentTab == 'partials/play.html' && e.keyCode == '32'){
        $scope.$apply(function (){
          $scope.draw();
        });  
      }
    }
    // draws a radnom card
    $scope.draw = function(){
      random = (Math.floor(Math.random()*100));
      document.getElementById('body').style.background = colors[random%colors.length];
      $scope.cardtitle = $scope.titles[random%$scope.titles.length];
      $scope.carddesc = $scope.descriptions[random%$scope.titles.length]
      $scope.cardcount++;
    }
    // calls getData and changes language
    $scope.changeLanguage = function(lang){ //
      getData(lang);
      $scope.currLang=lang;
    }
    /* Changing tabs */
    $scope.setTab = function (url) {
        $scope.currentTab = url;
    }
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
    /* angular bindings */
    $scope.cardtitle = "First taste!";
    $scope.carddesc = "Everyone takes a sip to get ready for Dronky!";
    $scope.cardcount = 0;
    $scope.currLang;
    $scope.changeLanguage("English");
    $scope.tabs = [{
            title: 'How to play',
            url: 'partials/howto.html'
        }, {
            title: 'Help',
            url: 'partials/help.html'
        }, {
            title: 'About',
            url: 'partials/about.html'
    }];
    $scope.currentTab = 'partials/play.html';
  }]);
  