'use strict';

angular.module('MainModule', ['MainModule.configuration', 'MainModule.templates', 'ui.router', 'ngAnimate', 'ui.bootstrap'])
//add configuration
//root config
  .controller('applicationController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    //attach upload path to root scope
    // $rootScope.serverPath = configuration.REST_BASE_URL;
    // $rootScope.clientPath = configuration.CLIENT_BASE_URL;
    $scope.pageTitle = 'Main page';
  }]);
