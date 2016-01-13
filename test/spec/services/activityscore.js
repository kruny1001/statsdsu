'use strict';

describe('Service: activityScore', function () {

  // load the service's module
  beforeEach(module('statsdsuApp'));

  // instantiate service
  var activityScore;
  beforeEach(inject(function (_activityScore_) {
    activityScore = _activityScore_;
  }));

  it('should do something', function () {
    expect(!!activityScore).toBe(true);
  });

});
