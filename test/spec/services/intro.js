'use strict';

describe('Service: intro', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var intro;
  beforeEach(inject(function (_intro_) {
    intro = _intro_;
  }));

  it('should do something', function () {
    expect(!!intro).toBe(true);
  });

});
