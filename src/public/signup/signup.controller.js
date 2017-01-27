(function () {
  'use strict';

  angular.module('public')
         .controller('SignupController', SignupController);

  SignupController.$inject = ['MenuService', 'InfoService'];
  function SignupController(MenuService, InfoService) {
    var signUp = this;
    signUp.message = '';
    signUp.info = {};

    signUp.submit = function() {
      MenuService.getMenuItem(signUp.info.shortName)
      .then(function successCallback(response) {
        MenuService.saveMyMenu(response);
        InfoService.saveMyInfo(signUp.info);
        signUp.message = 'Your information has been saved!';
      }, function errorCallback(response) {
        signUp.message = 'No such menu number exists!';
      });
    };

    signUp.validateShortNameAtKeyUp = function() {
      if (signUp.info.shortName !== undefined && signUp.info.shortName !== '') {
        MenuService.getMenuItem(signUp.info.shortName)
        .then(function successCallback(response) {
          signUp.message = '';
        }, function errorCallback(response) {
          signUp.message = 'No such menu number exists!';
        });
      }
    };
  }

})();
