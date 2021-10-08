const solution = (input, equalsNumber) => {
	const operators = ['', '-', '+'];
	const base = operators.length;
	const slots = input.length - 1;

	let iteration = 0;

	// takes current number (configuration of operators) and zippers it with input
	const formatExpression = (opSet, numSet) =>
		numSet
			.flatMap((el, idx) =>
				idx < numSet.length - 1 ? [el, operators[opSet[idx]]] : [el]
			)
			.join('');

	// while number being checked is less than possible outcomes (converted to base)
	while (iteration <= base ** slots) {
		const baseIteration = iteration.toString(base).padStart(slots, '0');

		// combine input and baseIteration
		expression = formatExpression(baseIteration, input);
		// if this equals our number return it
		if (new Function(`return ${expression}`)() === equalsNumber) {
			const answer = `${expression} = ${equalsNumber}`;
			return answer;
		}

		// otherwise go to the next number
		iteration++;
	}

	// in case there is no solution
	return 'no solution';
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(nums, 100));
