'use strict';

describe('Directive: chatBeta', function () {

  // load the directive's module
  beforeEach(module('statsdsuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chat-beta></chat-beta>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chatBeta directive');
  }));
});
