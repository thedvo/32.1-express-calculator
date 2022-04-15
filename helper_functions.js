function verifyAndConvert(queryResults) {
	let nums = [];

	for (let i = 0; i < queryResults.length; i++) {
		let convertedNum = Number(queryResults[i]);

		nums.push(convertedNum);
	}
	return nums;
}

function calculateMean(numbers) {
	let total = 0;
	let avg;

	for (let num of numbers) {
		total += num;
	}
	return (avg = total / numbers.length);
}

function calculateMedian(numbers) {
	let nums = numbers.length;
	let midIndex;

	if (nums % 2 === 0) {
		// if the length of the numbers array is even, then we will need 2 middle values to calculate the true median
		midIndex = nums / 2 - 1; // since going by index 0, minus 1 to get the correct position

		let midIndex2 = math.floor((nums + 1) / 2);
		return (numbers[midIndex] + numbers[midIndex2]) / 2;
	} else {
		midIndex = math.floor(nums / 2);
		return numbers[midIndex];
	}
}

function calculateMode(numbers) {
	let results = frequencyCounter(numbers); // returns an object which counts the frequency of each number in an array

	// Now with this object, we can calculate the key with the highest frequency to find the mode
	let max = 0;
	let maxKey;

	for (let num in results) {
		if (results[num] > max) {
			max = results[num];
			maxKey = num;
		}
	}
	return maxKey;
}

function frequencyCounter(numbers) {
	let frequency = {};

	for (let num of numbers) {
		if (frequency[num]) {
			frequency[num]++;
		} else {
			frequency[num] = 1;
		}
	}
	return frequency;
}

module.exports = {
	verifyAndConvert,
	calculateMean,
	calculateMedian,
	calculateMode,
};
