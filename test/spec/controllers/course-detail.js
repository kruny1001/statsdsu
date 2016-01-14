'use strict';

describe('Controller: CourseDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var CourseDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CourseDetailCtrl = $controller('CourseDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
