describe('MenuService - getMenuItem', function () {

  var menu;
  var $httpBackend;
  var ApiBasePath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return menu item', function() {
    var menuServiceResponseObject = {
      short_name: 'A1',
      name: 'Won Ton Soup with Chicken',
      description: 'chicken-stuffed won tons in clear chicken broth with white meat chicken pieces and a few scallions',
      price_small: 2.55,
      price_large: 5,
      small_portion_name: 'pint',
      large_portion_name: 'quart'
    };

    $httpBackend.whenGET(ApiPath + '/menu_items/A1.json').respond(menuServiceResponseObject);
    menuService.getMenuItem('A1').then(function(response) {
      expect(response).toEqual(menuServiceResponseObject);
    });
    $httpBackend.flush();
  });

});
