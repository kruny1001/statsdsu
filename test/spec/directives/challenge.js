'use strict';

describe('Directive: challenge', function () {

  // load the directive's module
  beforeEach(module('statsdsuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<challenge></challenge>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the challenge directive');
  }));
});
