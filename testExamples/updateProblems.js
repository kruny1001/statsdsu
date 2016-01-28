var Firebase = require("firebase");
var ref = new Firebase("https://statsdsu.firebaseio.com/visProblem");
var refIntro = new Firebase("https://statsdsu.firebaseio.com/introProblem")
var courseIntro = [
	{
		topic: 'Expression',
		material:[
			{desc: 'Type anything at the prompt, and R will evaluate it and print the answer', code:' 1 + 1', answerCode:''},
			{desc: 'Type the string "Go Jacks!"', code:'"Go Jacks"', answerCode:''},
		],
		challenge:[
			{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:'', answerValue:3597.84},
		]},
	{
		topic: 'Logical Values',
		material:[
			{desc: 'Some expressions return a "logical value": TRUE or FALSE. (Many programming languages refer to these as "boolean" values.) Let\'s try typing an expression that gives us a logical value:',
				code:' 3 < 4', answerCode:''},
			{desc: 'And another logical value (note that you need a double-equals sign to check whether two values are equal - a single-equals sign won\'t work):',
				code:'2 + 2 == 5', answerCode:''},
			{desc: 'T and F are shorthand for TRUE and FALSE. Try this:',
				code:'T == TRUE', answerCode:''},
		],
		challenge:[
			//{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'Variables',
		material:[
			{desc: 'As in other programming languages, you can store values into a variable to access it later. Type x = 42 to store a', code:' x =  42 ', answerCode:''},
			{desc: 'You can also use the following. This is a safer way to assign values.', code:'x  <-  42', answerCode:''},
			{desc: 'x can now be used in expressions in place of the original result. dividing x by 2 (/ is the division operator).', code:'x  <-  42\nx / 2', answerCode:''},
			{desc: 'You can re-assign any value to a variable at any time. Try assigning matey!" to x.', code:'x = "Go Jacks!"', answerCode:''},
			{desc: 'Now try assigning the TRUE logical', code:'x = TRUE', answerCode:''},
		],
		challenge:[
			//{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'Functions',
		material:[
			{desc: 'You call a function by typing its name, followed by one or more arguments to that function in parenthesis. Let\'s try using the sum function, to add up a few numbers. Enter:',
				code:' 1 + 1', answerCode:''},
			{desc: 'Some arguments have names. For example, to repeat a value 3 times, you would call the rep function and', code:'rep("Yo ho!", times = 3)', answerCode:''},
		],
		challenge:[
			{desc: '14. Challenge 2: Find the R function through Google to compute the square root of 57007.', code:'', answerCode:''},
		]},
	{
		topic: 'Vectors 1',
		material:[
			{desc: 'A vector\'s values can be numbers, strings, logical values, or any other type, as long as they\'re all the same type. Try creating a vector of numbers,',
				code:' c(4,7,9)', answerCode:''},
			{desc: 'The c function (c is short for Combine) creates a new vector by combining values.', code:"c('a','b','c')", answerCode:''},
			{desc: 'Vectors cannot hold values with different modes (types). Try mixing modes and see what happens:', code:'c(1,TRUE,"three")', answerCode:''},
		],
		challenge:[
			//{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'Vectors 2',
		material:[
			{desc: 'If you need a vector with a sequence of numbers you can create it with start:end notation. Let\'s make a vector with values from 5', code:' 5:9', answerCode:''},
			{desc: 'A more versatile way to make sequences is to call the seq function. Let\'s same thing with', code:'seq(5,9)', answerCode:''},
			{desc: 'seq also allows you to use increments other than 1. Try it with steps of 0.5', code:'seq(5,9, .5)', answerCode:''},
		],
		challenge:[
			{desc: '7. Now try making a vector with integers from 9 down to 5:', code:'', answerCode:''},
		]},
	{
		topic: 'Vector 3',
		material:[
			{desc: 'We\'re going to create a vector with some strings in it for you, and store it in the You can retrieve an individual value within a vector by providing its numeric index in square brackets. Try getting the third value:',
				code:"sentence = c('walk', 'the', 'plank')\nsentence[3]", answerCode:''},
			{desc: 'Many languages start array indices at 0, but R\'s vector indices start at 1. Get the first value by typing:', code:'sentence[1]', answerCode:''},
			{desc: 'You can assign new values within an existing vector. Try changing the third word to "dog":',
				code:'sentence[3] = "dog"', answerCode:''},
			{desc: 'If you add new values onto the end, the vector will grow to accommodate them. Let\'s add a fourth word:', code:"sentence[4] = 'to'", answerCode:''},
		],
		challenge:[
			//{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'Vector Names',
		material:[
			{desc: 'For this challenge, we\'ll make a 3-item vector for you, and store it in the You can assign names to a vector\'s elements by passing a second vector filled with names to the names assignment function, like this:',
				code:' Fishes =  c(5, 7, 2)\nbarplot(Fishes)      # see figure 1A\nnames(Fishes) = c("Tom", "Jerry", "Mickey")\nbarplot(Fishes)   # see figure 1B', answerCode:''},
			{desc: 'Assigning names for a vector can act as useful labels for the data. Below, you can see what our vector looks like now. You can also use the names to access the vector\'s values. Try getting the value for the "Tom" rank:',
				code:'Fishes =  c(5, 7, 2)\nbarplot(Fishes)      # see figure 1A\nnames(Fishes) = c("Tom", "Jerry", "Mickey")\nbarplot(Fishes)   # see figure 1B\nFishes\nFishes["Jerry"]', answerCode:''},
			{desc: 'If you add new values onto the end, the vector will grow to accommodate them. Let\'s add a fourth word:', code:"sentence[4] = 'to'", answerCode:''},
		],
		challenge:[
			{desc: 'Now see if you can set the value for the "Tom" to something other than 5 name rather than the position.', code:'', answerCode:''},
		]},
	{
		topic: 'Vector Math',
		material:[
			{desc: 'Most arithmetic operations work just as well on vectors as they do on single values. We\'ll make another sample vector for you to work with, and store it in the a variable. If you add a scalar (a single value) to a vector, the scalar will be added to each value in the vector, returning a new vector with the results. Try adding 1 to each element in our vector:',
				code:' a=c(1,2,3)\nb=a+1\nb', answerCode:''},
			{desc: 'The same is true of division, multiplication, or any other basic arithmetic. Try dividing our vector by 2:', code:'a=c(1,2,3)\nb=a+1\nb = a/2\nb', answerCode:''},
			{desc: 'Functions that normally work with scalars can operate on each element of a vector, too. Try getting the sine of each value in our vector:  Now try getting the square roots with',
				code:'a=c(1,2,3)\nsqrt(a)', answerCode:''},
			{desc: 'If you add two vectors, R will take each value from each vector and add them. We\'ll make a second vector for you to experiment with, and store it in the b variable. Try adding it to the a vector:',
				code:'b = c(4, 5, 6)\na + b', answerCode:''},
		],
		challenge:[
			{desc: 'Now try multiplying our vector by 10:', code:'', answerCode:''},
			{desc: 'Now try subtracting b from a', code:'', answerCode:''},
		]},
	{
		topic: 'Scatter Plots',
		material:[
			{desc: 'The plot function takes two vectors, one for X values and one for Y draws a graph of them. Let\'s draw a graph showing the relationship of numbers and their sines. First, we\'ll need some sample data. We\'ll create a vector for you with some fractional values between 0 and 20, and store it in the x variable. Now, try creating a second vector with the sines of those values:',
				code:' x = seq(1, 20, 0.1)\ny = sqrt(x)', answerCode:''},
			{desc: 'Then simply call plot with your', code:'x = seq(1, 20, 0.1)\ny = sqrt(x)\nplot(x,y)', answerCode:''},
		],
		challenge:[
			{desc: 'Great job! Notice on the graph that values from the first argument (x) are used for the horizontal axis, and values from the second (y) for the vertical. 23. Challenge5: Your turn. We\'ll create a vector with some negative and positive values for you, and store it in the x variable.  Plot x against',
				code:'x = -10:10', answerCode:''},
		]},
	{
		topic: 'NA Values and missing data',
		material:[
			{desc: 'Sometimes, when working with sample data, a given value isn\'t available. But it\'s not a good idea to just throw those values out. R has a value that explicitly indicates a sample was not available: NA. Many functions that work with vectors treat this value specially. We\'ll create a vector for you with a missing sample, and store it in the a variable. Try to get the sum of its values, and see what the result is:',
				code:' a = c(1, 3, NA, 7, 9)\nsum(a)', answerCode:''},
			{desc: 'The sum is considered "not available" by default because one of the vector\'s values was NA. This is the responsible thing to do; R won\'t just blithely add up the numbers without warning you about the incomplete data. We can explicitly tell sum (and many other functions) to remove NA values before they do their Remember that command to bring up help for a function? Bring up documentation for the sum function',
				code:'help(sum)', answerCode:''},
			{desc: 'As you see in the documentation, sum can take an optional named argument, na.rm. It\'s set to FALSE by default, but if you set it to TRUE, all NA arguments will be removed from the vector before the calculation is performed. Try calling sum again, with na.rm set to TRUE:',
				code:'a = c(1, 3, NA, 7, 9)\nsum(a)\nsum(a,na.rm = TRUE)', answerCode:''},
		],
		challenge:[
			{desc: 'Now compute the average value for a, ignore the missing values.', code:'', answerCode:''},
		]},
];
var courseVis = [
	{
		topic: 'Scan',
		material:[
			{desc: 'Type anything at the prompt, and R will evaluate it and print the answer',
				code:'#data from https://statsdsu.firebaseio.com/data1.json\n\njson_file <- "https://statsdsu.firebaseio.com/data1.json"\njson_data <- fromJSON(file=json_file)\n#hist(json_data)\n#plot(json_data)\n#qqline(json_data)\n#qqnorm(json_data)', answerCode:''},
			{desc: 'Type the string "Go Jacks!"', code:'"Go Jacks"', answerCode:''},
		],
		challenge:[
			{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'Plot',
		material:[
			{desc: 'Draw Plot', code:' 1 + 1', answerCode:''},
			{desc: 'Draw lag plot', code:'"Go Jacks"', answerCode:''},
		],
		challenge:[
			{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'Histogram',
		material:[
			{desc: 'Type anything at the prompt, and R will evaluate it and print the answer', code:' 1 + 1', answerCode:''},
			{desc: 'Type the string "Go Jacks!"', code:'"Go Jacks"', answerCode:''},
		],
		challenge:[
			{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'qqnorm',
		material:[
			{desc: 'Type anything at the prompt, and R will evaluate it and print the answer', code:' 1 + 1', answerCode:''},
			{desc: 'Type the string "Go Jacks!"', code:'"Go Jacks"', answerCode:''},
		],
		challenge:[
			{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'qqline',
		material:[
			{desc: 'Type anything at the prompt, and R will evaluate it and print the answer', code:' 1 + 1', answerCode:''},
			{desc: 'Type the string "Go Jacks!"', code:'"Go Jacks"', answerCode:''},
		],
		challenge:[
			{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
	{
		topic: 'boxplot',
		material:[
			{desc: 'Type anything at the prompt, and R will evaluate it and print the answer', code:' 1 + 1', answerCode:''},
			{desc: 'Type the string "Go Jacks!"', code:'"Go Jacks"', answerCode:''},
		],
		challenge:[
			{desc: 'Now try multiplying 45.6 times 78.9', code:'', answerCode:''},
		]},
];
courseVis.forEach(function(value, index){
	ref.push(value);
});
courseIntro.forEach(function(value, index){
	refIntro.push(value);
});
