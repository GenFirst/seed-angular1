'use strict';

angular.module('MainModule')
  .controller('mainController', ['$scope', 'srvMain', function ($scope, srvMain) {
    $scope.form = {
      username: srvMain.getName()
    };

    $scope.reset = function () {
      $scope.form.username = srvMain.getName();
    };

  }]);
