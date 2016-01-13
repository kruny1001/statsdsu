'use strict';

describe('Controller: CoursedetailCtrl', function () {

  // load the controller's module
  beforeEach(module('statsdsuApp'));

  var CoursedetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoursedetailCtrl = $controller('CoursedetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
