(function () {
  'use strict';

  angular.module('common')
  .service('InfoService', InfoService);

  InfoService.$inject = ['$http', '$window', 'ApiPath'];
  function InfoService($http, $window, ApiPath) {
    var service = this;

    service.saveMyInfo = function(info) {
      $window.localStorage.setItem('myInfo', JSON.stringify(info));
    };

    service.getMyInfo = function() {
      var myInfo = JSON.parse($window.localStorage.getItem('myInfo'));
      if (myInfo) {
        return myInfo;
      }
      return null;
    };

  }

})();
