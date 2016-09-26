'use strict';

describe('Directive: pixiGal', function () {

  // load the directive's module
  beforeEach(module('statsdsuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pixi-gal></pixi-gal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pixiGal directive');
  }));
});
