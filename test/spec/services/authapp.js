'use strict';

describe('Service: AuthApp', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var AuthApp;
  beforeEach(inject(function (_AuthApp_) {
    AuthApp = _AuthApp_;
  }));

  it('should do something', function () {
    expect(!!AuthApp).toBe(true);
  });

});
