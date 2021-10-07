const solution = (input, equalsNumber) => {
	const operators = ['', '-', '+'];
	const base = operators.length;
	const slots = input.length - 1;

	let cur = 0;

	// takes current number (configuration of operators) and zippers it with input
	const formatExpression = (opSet, numSet) => {
		return [...numSet]
			.map((el, idx) =>
				idx < input.length - 1 ? [el, operators[opSet[idx]]] : [el]
			)
			.reduce((a, b) => a.concat(b))
			.join('');
	};

	// while number being checked is less than possible outcomes (converted to base)
	while ((cur.toString(operators.length) <= parseInt(base ** slots), base)) {
		const paddedCur = cur.toString(operators.length).padStart(8, '0');

		// call zipper on input and current iteration
		expression = formatExpression(paddedCur, input);

		// if this equals our number return it
		if (new Function(`return ${expression}`)() === equalsNumber) {
			const answer = `${expression} = ${equalsNumber}`;
			return answer;
		}

		// otherwise go to the next number
		cur++;
	}

	// in case there is no solution
	return 'no solution';
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(nums, 100));
