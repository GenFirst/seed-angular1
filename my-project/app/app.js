'use strict';

angular.module('MainModule', ['templates', 'ui.router', 'ngAnimate', 'ui.bootstrap'])
//add configuration
//root config
  .controller('AppCtrl', ['$rootScope', '$scope', '$templateCache', function ($rootScope, $scope, $templateCache) {
    //attach upload path to root scope
    // $rootScope.serverPath = configuration.REST_BASE_URL;
    // $rootScope.clientPath = configuration.CLIENT_BASE_URL;
    $scope.pageTitle = 'Main page';

  }]);