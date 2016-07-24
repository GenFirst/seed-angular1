'use strict';

angular.module('MainModule')
//add configuration
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {

            // For any unmatched url, redirect to /state1
            $urlRouterProvider.otherwise('/main');

            //$locationProvider.html5Mode(true);

            //set up the states
            $stateProvider
                .state('main', {
                    url: '/main',
                    template: '<h1>AAAAA</h1>',
                    controller: 'ctrlMain'
                });
        }]);