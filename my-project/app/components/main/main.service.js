'use strict';

angular.module('MainModule')
  .service('srvMain', ['REST_BASE_URL', function (restUrl) {

    var getName = function () {
      console.log(restUrl); //injected constant from configuration module, depends on a build environment
      return 'John';
    };

    return {
      getName: getName
    };
  }]);