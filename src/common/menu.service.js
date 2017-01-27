(function () {
  'use strict';

  angular.module('common')
  .service('MenuService', MenuService);

  MenuService.$inject = ['$http', '$window', 'ApiPath'];
  function MenuService($http, $window, ApiPath) {
    var service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    service.getMenuItems = function (category) {
      var config = {};
      if (category) {
        config.params = {'category': category};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };

    service.getMenuItem = function(shortName) {
      return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(function (response) {
        return response.data;
      });
    };

    service.saveMyMenu = function(menu) {
      $window.localStorage.setItem('myMenu', JSON.stringify(menu));
    };

    service.getMyMenu = function() {
      var myMenu = JSON.parse(window.localStorage.getItem('myMenu'));
      if (myMenu) {
        return myMenu;
      }
      return null;
    };

  }

})();
