'use strict';

describe('Directive: seSurvey', function () {

  // load the directive's module
  beforeEach(module('statsdsuApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<se-survey></se-survey>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the seSurvey directive');
  }));
});
