'use strict';

angular.module('MainModule')
//add configuration
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise('/index');

      //set up the states
      $stateProvider
        .state('index', {
          url: '/index',
          views: {
            'content@': {
              templateUrl: 'main/main.html',
              controller: 'mainController'
            }
          }
        });

    }]);
