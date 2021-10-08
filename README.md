# Find Expressions That Equal 100

## Prompt

Write a program that creates arithmetic expressions by inserting + or - or nothing between the ordered digits 1,2,…,9 such that the expression evaluates to 100. For example 1 + 2 + 3 - 4 + 5 + 6 + 78 + 9 = 100, so this expression would be output by your program.

## Solutions

### Submitted Solution (Odometer)

Run `node solution.js` to see my solution. I was inspired by an odometer of a car. Each combination of '', '-' and '+' (converted to an array with the index representing 0, 1, 2), is found if the numbers increase from 00000000 to 22222222. The trick was converting the number to base 3 math so that we don't check combinations that aren't relavent (00000003 or 22972342 for example). After that everything fell into place.

### Randomize

This was the initial solution I came up with. The obvious problem is that some times this solution is very fast (in the initial first 10 times I tested it, once a solution was found on the first iteration of the while loop!), while sometimes it is very slow (sometimes over 1000 iterations, though the average is a little under 600 iterations). It's not very efficient, consistent, or flexible. Another problem is if there were no solution, this while loop would run forever.

What I did like about it though was it can return a different solution each time the program runs.

### Recursion

My second thought after Randomize. I ultimately found the odometer solution more straightforward and abandoned this approach. After finding the Odometer solution, I came back to this and got further with it. As of now it still doesn't work. I can console.log the iterations but I cannot return the answer.

## Resources

- [number of solutions](https://www.cut-the-knot.org/do_you_know/digits.shtml)
- [zipper function](https://newbedev.com/how-to-insert-a-new-element-in-between-all-elements-of-a-js-array)
- [helpful thoughts](https://stackoverflow.com/questions/447783/how-do-i-calculate-the-number-of-permutations-in-base-3-combinatorics)
- [interesting thread re: permutations](https://stackoverflow.com/questions/9960908/permutations-in-javascript/22063440#22063440) (Ultimately used very little from this but still interesting)
- [padStart](https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript)
- [thread on base math in JS](https://www.reddit.com/r/learnjavascript/comments/1nas88/how_do_i_increment_a_number_in_a_base_other_than/)
- [eval vs new Function](https://stackoverflow.com/questions/14725498/converting-string-to-expression/14725576)
