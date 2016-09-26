'use strict';

describe('Controller: SurveyResultCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var SurveyResultCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SurveyResultCtrl = $controller('SurveyResultCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
