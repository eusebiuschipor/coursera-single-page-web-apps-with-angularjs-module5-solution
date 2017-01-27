(function () {
  'use strict';

  angular.module('public')
         .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['myMenu', 'myInfo', 'ApiPath'];
  function MyInfoController(myMenu, myInfo, ApiPath) {
    var $ctrl = this;
    $ctrl.myMenu = myMenu;
    $ctrl.myInfo = myInfo;
    $ctrl.basePath = ApiPath;
    $ctrl.registered = $ctrl.myMenu !== null ? true : false;
  }

})();
