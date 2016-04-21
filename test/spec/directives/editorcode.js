'use strict';

describe('Directive: editorCode', function () {

  // load the directive's module
  beforeEach(module('statsdsuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<editor-code></editor-code>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the editorCode directive');
  }));
});
