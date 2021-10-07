let count = 0;
const solution = (input, equalsNumber) => {
	let answer;

	// function to format input to allow for operators to be inserted into
	const emptyOperatorArray = [...input]
		// map over input, if index is not the last element return an arraay of el and empty space
		.map((el, idx) => (idx < input.length - 1 ? [el, ' '] : [el]))
		// flatten array
		.reduce((a, b) => a.concat(b));

	//while test expression doesn't equal number being equated to
	while (eval(answer) !== equalsNumber) {
		const options = ['-', '+', ''];
		answer = emptyOperatorArray
			.map((el) => {
				return typeof el === 'number'
					? el
					: options[Math.floor(Math.random() * options.length)];
			})
			.join('');

		// add a count to find out how many times random configurations were tried
		count++;
	}

	return `Answer: ${answer} = ${equalsNumber}`;
};

// number set to test against
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(nums, 100), 'Count: ', count);
