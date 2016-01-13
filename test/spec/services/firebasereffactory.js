'use strict';

describe('Service: FirebaseRefFactory', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var FirebaseRefFactory;
  beforeEach(inject(function (_FirebaseRefFactory_) {
    FirebaseRefFactory = _FirebaseRefFactory_;
  }));

  it('should do something', function () {
    expect(!!FirebaseRefFactory).toBe(true);
  });

});
