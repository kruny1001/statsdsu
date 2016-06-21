var _ = require('lodash')
var temp = ["/ocpu/tmp/x05a373f20a/R/.val",
	"/ocpu/tmp/x05a373f20a/graphics/1",
	"/ocpu/tmp/x05a373f20a/graphics/2","/ocpu/tmp/x05a373f20a/source",
	"/ocpu/tmp/x05a373f20a/console", "/ocpu/tmp/x05a373f20a/info",
	"/ocpu/tmp/x05a373f20a/files/DESCRIPTION",
	"/ocpu/tmp/x05a373f20a/files/input.R"];

var result = [];
_.forEach(temp, function(item) {
	if(_.includes(item, 'graphics'))
		result.push(item)
})

console.log(result)