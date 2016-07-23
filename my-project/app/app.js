'use strict';

angular.module('MainModule', [''])
    //add configuration
    .config(function run() {

    })

    //root config
    .controller('AppCtrl', ['$rootScope', '$scope', function ($rootScope, $scope) {
        //attach upload path to root scope
        // $rootScope.serverPath = configuration.REST_BASE_URL;
        // $rootScope.clientPath = configuration.CLIENT_BASE_URL;
    }])

    //specify run level configuration
    .run(function run() {
    });