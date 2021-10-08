const solution = (input, equalsNumber) => {
	const operators = ['', '-', '+'];
	const base = operators.length;
	const slots = input.length - 1;

	// takes current number (configuration of operators) and zippers it with input
	const formatExpression = (opSet, numSet) => {
		return [...numSet]
			.map((el, idx) =>
				idx < input.length - 1 ? [el, operators[opSet[idx]]] : [el]
			)
			.reduce((a, b) => a.concat(b))
			.join('');
	};

	const generate = (s, slots) => {
		console.log(s);
		if (s.length === slots) {
			expression = formatExpression(s, input);
			if (new Function(`return ${expression}`)() === equalsNumber) {
				let answer = `${expression} = ${equalsNumber}`;
				return answer;
			}
		} else {
			for (let i = 0; i < base; i++) {
				// returns first iteration rather than calling all iterations and returning value
				generate(s + i, slots);
			}
			return false;
		}
	};

	return generate('', slots);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(nums, 100));
