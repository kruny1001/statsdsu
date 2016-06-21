'use strict';

describe('Filter: phoneFilter', function () {

  // load the filter's module
  beforeEach(module('statsdsuApp'));

  // initialize a new instance of the filter before each test
  var phoneFilter;
  beforeEach(inject(function ($filter) {
    phoneFilter = $filter('phoneFilter');
  }));

  it('should return the input prefixed with "phoneFilter filter:"', function () {
    var text = 'angularjs';
    expect(phoneFilter(text)).toBe('phoneFilter filter: ' + text);
  });

});
