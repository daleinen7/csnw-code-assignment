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

	const generate = (s, slots) => {
		let answer;
		if (s.length === slots) {
			expression = formatExpression(s, input);
			if (new Function(`return ${expression}`)() === equalsNumber) {
				answer = `${expression} = ${equalsNumber}`;
				console.log(answer);
				return answer;
			}
		} else {
			for (let i = 0; i < base; i++) {
				generate(s + i, slots);
			}
		}
	};

	return generate('', slots);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(nums, 100));
