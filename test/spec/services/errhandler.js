'use strict';

describe('Service: errHandler', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var errHandler;
  beforeEach(inject(function (_errHandler_) {
    errHandler = _errHandler_;
  }));

  it('should do something', function () {
    expect(!!errHandler).toBe(true);
  });

});
