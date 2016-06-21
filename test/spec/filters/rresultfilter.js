'use strict';

describe('Filter: rResultFilter', function () {

  // load the filter's module
  beforeEach(module('statsdsuApp'));

  // initialize a new instance of the filter before each test
  var rResultFilter;
  beforeEach(inject(function ($filter) {
    rResultFilter = $filter('rResultFilter');
  }));

  it('should return the input prefixed with "rResultFilter filter:"', function () {
    var text = 'angularjs';
    expect(rResultFilter(text)).toBe('rResultFilter filter: ' + text);
  });

});
