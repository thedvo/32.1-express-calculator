const {
	calculateMean,
	calculateMedian,
	calculateMode,
} = require('./helper_functions');

describe('calculate the mean', function () {
	test('finds the mean of a list of numbers', function () {
		expect(calculateMean([3, 3, 5, 5])).toEqual(4);
	});
});
describe('calculate the median', function () {
	test('finds the median of an even list of numbers', function () {
		expect(calculateMedian([3, 3, 5, 5])).toEqual(4);
	});
	test('finds the median of an odd list of numbers', function () {
		expect(calculateMedian([3, 3, 5, 5, 9])).toEqual(5);
	});
});

describe('calculate the mode', function () {
	test('finds the mode of a list of numbers', function () {
		expect(calculateMode([1, 3, 3, 4, 4, 4, 4])).toEqual(4);
	});
});
