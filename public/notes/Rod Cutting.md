---
id: Rod Cutting
aliases:
  - Rod Cutting
tags: []
---

# Rod Cutting
[Backtracking](notes/Backtracking.md) problem.  

Given a non negative integer n: length of the rod, we're cutting  
- an array `p[1..n]`  where selling a piece of length i, gives us `p[i]`  in revenue 

## Optimization Problem 

### Feasible Solution
What is the first length were going to sell.  
Say we are going to sell $j$ units. 

Get $P[j]$, now Recurse and find the rest of that, $n - j$  
This is a "Optimal substructure"  

