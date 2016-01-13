'use strict';

describe('Service: class', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var class;
  beforeEach(inject(function (_class_) {
    class = _class_;
  }));

  it('should do something', function () {
    expect(!!class).toBe(true);
  });

});
