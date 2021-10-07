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
		expression = formatExpression(
			cur.toString(operators.length).padStart(8, '0'),
			input
		);
		if (eval(expression) === equalsNumber) {
			return `${expression} = ${equalsNumber}`;
		}

		cur++;
	}
	return 'no solution';
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(nums, 100));
