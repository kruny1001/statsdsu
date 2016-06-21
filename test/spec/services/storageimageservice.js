'use strict';

describe('Service: storageImageService', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var storageImageService;
  beforeEach(inject(function (_storageImageService_) {
    storageImageService = _storageImageService_;
  }));

  it('should do something', function () {
    expect(!!storageImageService).toBe(true);
  });

});
