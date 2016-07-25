'use strict';

angular.module('MainModule')
    .service('srvMain', function () {

        var getName = function () {
            return 'John';
        };

        return {
            getName : getName
        };
    });