'use strict';

angular.module('MainModule')
  .service('srvMain', ['REST_BASE_URL', '$log', function (restUrl, $log) {

    var getName = function () {
      $log.info(restUrl); //injected constant from configuration module, depends on a build environment
      return 'John';
    };

    return {
      getName: getName
    };
  }]);
