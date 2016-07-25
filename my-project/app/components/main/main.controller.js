'use strict';

angular.module('MainModule')
    .controller('ctrlMain', ['$scope', 'srvMain', function ($scope, srvMain) {
        $scope.username = srvMain.getName();
    }]);

