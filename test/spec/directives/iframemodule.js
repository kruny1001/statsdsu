'use strict';

describe('Directive: iframeModule', function () {

  // load the directive's module
  beforeEach(module('statsdsuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<iframe-module></iframe-module>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the iframeModule directive');
  }));
});
