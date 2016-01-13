'use strict';

describe('Service: UserFire', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var UserFire;
  beforeEach(inject(function (_UserFire_) {
    UserFire = _UserFire_;
  }));

  it('should do something', function () {
    expect(!!UserFire).toBe(true);
  });

});
