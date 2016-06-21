'use strict';

describe('Filter: genderFilter', function () {

  // load the filter's module
  beforeEach(module('statsdsuApp'));

  // initialize a new instance of the filter before each test
  var genderFilter;
  beforeEach(inject(function ($filter) {
    genderFilter = $filter('genderFilter');
  }));

  it('should return the input prefixed with "genderFilter filter:"', function () {
    var text = 'angularjs';
    expect(genderFilter(text)).toBe('genderFilter filter: ' + text);
  });

});
