'use strict';

describe('Service: runSrc', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var runSrc;
  beforeEach(inject(function (_runSrc_) {
    runSrc = _runSrc_;
  }));

  it('should do something', function () {
    expect(!!runSrc).toBe(true);
  });

});
