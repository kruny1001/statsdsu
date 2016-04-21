'use strict';

describe('Service: SECService', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var SECService;
  beforeEach(inject(function (_SECService_) {
    SECService = _SECService_;
  }));

  it('should do something', function () {
    expect(!!SECService).toBe(true);
  });

});
