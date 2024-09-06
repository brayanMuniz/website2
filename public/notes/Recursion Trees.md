---
id: Recursion Trees
aliases:
  - Recursion Trees
tags: []
---

# Recursion Trees
- simple, general, pictorial tool for solving divide-and-conquer recurrences
- rooted tree with one node for each recursive subproblem
- value of each node is the amount of time spent on the corresponding subproblem excluding recursive calls
- overall running time of the algorithm is the sum of the values of all nodes in the tree. 

## How to get sum of all levels
Get all the work for each level and sum 

## How many levels? 
$$
L = log_cn
$$

## How many leaves 
$$
r = ^{log_cn} = n^{log_cr}
$$

## The Three patterns 
### Geometric Series 
$< 1 \rightarrow \Theta (f(n))$  
$= 1 \rightarrow \Theta (f(n)log n)$  
$> 1 \rightarrow \Theta (n^{log_cr})$


