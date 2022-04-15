/* For this exercise, you will build an Express.js application that performs three statistical operations given an arbitrary amount of numbers:

mean (average)
median (midpoint)
mode (most frequent)
The operations are invoked via one route per operation.

 */

const express = require('express');
const ExpressError = require('./expressError');
const {
	verifyAndConvert,
	calculateMean,
	calculateMedian,
	calculateMode,
} = require('./helper_functions');

const app = express();
app.use(express.json());

app.get('/mean', (request, response, next) => {
	if (!request.query.nums) {
		throw new ExpressError(
			'Please pass in a query key of "nums" with a list of numbers which are comma-separated.',
			400
		);
	}

	const { nums } = request.query;
	let queryResults = nums.split(','); // separates individual query string results with commas and within an array
	let numbers = verifyAndConvert(queryResults); // takes the values and converts the strings to numbers if they are valid numbers
	if (numbers instanceof Error) {
		throw new ExpressError(numbers.message);
	}

	let result = {
		operation: 'mean',
		value: calculateMean(numbers),
	};

	return response.send(result);
});

app.get('/median', (request, response, next) => {
	if (!request.query.nums) {
		throw new ExpressError(
			'Please pass in a query key of "nums" with a list of numbers which are comma-separated.',
			400
		);
	}

	const { nums } = request.query;
	let queryResults = nums.split(',');
	let numbers = verifyAndConvert(queryResults);

	if (numbers instanceof Error) {
		throw new ExpressError(numbers.message);
	}

	let result = {
		operation: 'median',
		value: calculateMedian(numbers),
	};

	return response.send(result);
});

app.get('/mode', (request, response, next) => {
	if (!request.query.nums) {
		throw new ExpressError(
			'Please pass in a query key of "nums" with a list of numbers which are comma-separated.',
			400
		);
	}

	const { nums } = request.query;
	let queryResults = nums.split(',');
	let numbers = verifyAndConvert(queryResults);

	if (numbers instanceof Error) {
		throw new ExpressError(numbers.message);
	}

	let result = {
		operation: 'mode',
		value: calculateMode(numbers),
	};

	return response.send(result);
});

// 404 handler
app.use(function (req, res, next) {
	const err = new ExpressError('Not Found', 404);
	return next(err);
});

// generic error handler
app.use(function (err, req, res, next) {
	// the default status is 500 Internal Server Error
	let status = err.status || 500;
	let message = err.message;

	// set the status and alert the user
	return res.status(status).json({
		error: { message, status },
	});
});

app.listen(3000, () => {
	console.log('Server is running on Port 3000');
});
