# Find Expressions That Equal 100

## Prompt

Write a program that creates arithmetic expressions by inserting + or - or nothing between the ordered digits 1,2,…,9 such that the expression evaluates to 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100, so this expression would be output by your program.

## Solutions

### Randomize

This was the initial solution I came up with. The obvious problem is that some times this solution is very fast (in the initial first 10 times I tested it, once a solution was found on the first iteration of the while loop!), while sometimes it is very slow (over 1000 iterations). Not very efficient or consistent. Another problem is if there were no solution, this while loop would run forever.

What I did like about it though was it can return a different solution each time the program runs.

### Submitted Solution (Odometer)

This is the second solution I came up with. I was inspired by an odometer of a car. Each combination of '', '-' and '+' (converted to an array with the index representing 0, 1, 2), is found if the numbers increase from 00000000 to 22222222. The trick was converting the number to base 3 math so that we don't check combinations that aren't relavent (00000003 or 22972342 for example). After that everything fell into place.

## Resources

[number of solutions](https://www.cut-the-knot.org/do_you_know/digits.shtml)
[](https://newbedev.com/how-to-insert-a-new-element-in-between-all-elements-of-a-js-array)
[](https://stackoverflow.com/questions/447783/how-do-i-calculate-the-number-of-permutations-in-base-3-combinatorics)
[](https://stackoverflow.com/questions/9960908/permutations-in-javascript/22063440#22063440)
[](https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript)
[](https://www.reddit.com/r/learnjavascript/comments/1nas88/how_do_i_increment_a_number_in_a_base_other_than/)
