'use strict';

describe('Filter: ethinicityFilter', function () {

  // load the filter's module
  beforeEach(module('statsdsuApp'));

  // initialize a new instance of the filter before each test
  var ethinicityFilter;
  beforeEach(inject(function ($filter) {
    ethinicityFilter = $filter('ethinicityFilter');
  }));

  it('should return the input prefixed with "ethinicityFilter filter:"', function () {
    var text = 'angularjs';
    expect(ethinicityFilter(text)).toBe('ethinicityFilter filter: ' + text);
  });

});
