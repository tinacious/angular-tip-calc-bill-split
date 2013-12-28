'use strict';

describe('Controller: NgtoggleCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var NgtoggleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NgtoggleCtrl = $controller('NgtoggleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
