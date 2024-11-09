# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Worse-case runtime compexity: $\Theta$($n^2$ log n)

This is due to the function withing mergesort() being $\Theta$(log n) as the input array gets divided down into two iteratively regardless of case. 
The worse-case runtime of merge() being $\Theta$($n^2$).
The case where its reverse sorted, each n will be compared to the rest of the array (n).
