const solution = (input, equalsNumber) => {
	const operators = ['', '-', '+'];
	const base = operators.length;
	const slots = input.length - 1;

	// takes current number (configuration of operators) and zippers it with input
	const formatExpression = (opSet, numSet) => {
		return numSet
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
				// console.log(answer);
				return answer;
			}
		} else {
			generate(s + 0, slots);
			generate(s + 1, slots);
			generate(s + 2, slots);

			// if (s[s.length - 1] === operators[0]) return generate(s + 1, slots);
			// if (s[s.length - 1] === operators[1]) return generate(s + 2, slots);
			// if (s[s.length - 1] === operators[2]) return generate(s, slots);

			// for (let i = 0; i < base; i++) {
			// 	// returns first iteration rather than calling all iterations and returning value
			// 	generate(s + i, slots);
			// }
			// return generate(s + 0, slots);
			// if (s[s.length - 1] === operators[0]) return generate()
		}
	};

	return generate('', slots);
};

const nums = [1, 2, 3];

console.log(solution(nums, 100));
