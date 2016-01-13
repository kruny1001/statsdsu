'use strict';

describe('Service: progressReport', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var progressReport;
  beforeEach(inject(function (_progressReport_) {
    progressReport = _progressReport_;
  }));

  it('should do something', function () {
    expect(!!progressReport).toBe(true);
  });

});
