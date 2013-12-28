'use strict';

describe('Directive: jqueryScripts', function () {

  // load the directive's module
  beforeEach(module('appApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jquery-scripts></jquery-scripts>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jqueryScripts directive');
  }));
});
