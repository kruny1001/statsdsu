'use strict';

describe('Service: rpcFactory', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var rpcFactory;
  beforeEach(inject(function (_rpcFactory_) {
    rpcFactory = _rpcFactory_;
  }));

  it('should do something', function () {
    expect(!!rpcFactory).toBe(true);
  });

});
