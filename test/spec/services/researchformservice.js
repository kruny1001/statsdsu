'use strict';

describe('Service: ResearchFormService', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var ResearchFormService;
  beforeEach(inject(function (_ResearchFormService_) {
    ResearchFormService = _ResearchFormService_;
  }));

  it('should do something', function () {
    expect(!!ResearchFormService).toBe(true);
  });

});
