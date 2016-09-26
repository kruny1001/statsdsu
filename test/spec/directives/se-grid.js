'use strict';

describe('Directive: seGrid', function () {

  // load the directive's module
  beforeEach(module('statsdsuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<se-grid></se-grid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the seGrid directive');
  }));
});
