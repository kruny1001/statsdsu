'use strict';

describe('Service: courseFactory', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var courseFactory;
  beforeEach(inject(function (_courseFactory_) {
    courseFactory = _courseFactory_;
  }));

  it('should do something', function () {
    expect(!!courseFactory).toBe(true);
  });

});
