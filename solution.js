const { performance } = require('perf_hooks');

const solution = (input, equalsNumber) => {
	const startTime = performance.now();

	const operators = ['', '-', '+'];

	const base = operators.length;
	const slots = input.length;

	let iteration = 0;

	const answer = [];

	// takes current number (configuration of operators) and zippers it with input
	const formatExpression = (opSet, numSet) =>
		numSet
			.map((el, idx) =>
				operators[opSet[idx]] === ''
					? el
					: ' ' + operators[opSet[idx]] + ' ' + el
			)
			.join('');

	// takes current number (configuration of operators) and returns what the expression evaluates to
	const evaluateExpression = (expression) => {
		const expressionArr = expression.split(' ');
		let currentOperator = '+';
		let runningValue = 0;
		expressionArr.forEach((el) => {
			if (isNaN(parseInt(el))) {
				currentOperator = el;
			} else {
				el = parseInt(el);
				switch (currentOperator) {
					case '-':
						runningValue -= el;
						break;

					case '+':
						runningValue += el;
						break;
					default:
						break;
				}
			}
		});
		return parseInt(runningValue);
	};

	// while number being checked is less than possible outcomes (converted to base)
	while (iteration <= base ** slots) {
		const baseIteration = iteration.toString(base).padStart(slots, '0');

		// combine input and baseIteration
		expression = formatExpression(baseIteration, input);

		// if this equals our number return it
		if (evaluateExpression(expression) === equalsNumber) {
			if (expression[0] === ' ') {
				const correct = `${expression} = ${equalsNumber}`;
				answer.push(correct);
			}
		}

		// otherwise go to the next number
		iteration++;
	}

	const endTime = performance.now();

	const totalTime = endTime - startTime;

	// in case there is no solution
	if (answer.length > 0) {
		return (
			answer.map((ans) => {
				return ans + '\n';
			}) +
			'solution count: ' +
			answer.length +
			'\n' +
			'total time: ' +
			totalTime
		);
	} else {
		return 'no solution';
	}
};

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Target number: ', (targetNumber) => {
	readline.question('Space deliniated number set:', (numberSet) => {
		const nums = numberSet.split(' ');

		console.log(solution(nums, parseInt(targetNumber)));
		readline.close();
	});
});
