'use strict';

describe('Service: chatFactory', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var chatFactory;
  beforeEach(inject(function (_chatFactory_) {
    chatFactory = _chatFactory_;
  }));

  it('should do something', function () {
    expect(!!chatFactory).toBe(true);
  });

});
