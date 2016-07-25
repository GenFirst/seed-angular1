'use strict';

angular.module('MainModule')
  .service('srvMain', ['SERVER', function (serverPath) {

    var getName = function () {
      console.log(serverPath); //injected constant from configuration module, depends on a build environment
      return 'John';
    };

    return {
      getName: getName
    };
  }]);