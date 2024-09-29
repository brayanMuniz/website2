---
id: Dynamic Programming
aliases:
  - Dynamic Programming
tags: []
---

# Dynamic Programming
[Backtracking](notes/Backtracking.md) + [Memoization](notes/Memoization.md).  
[Recursion](notes/Recursion.md) without repetition  

## Framework
1. Formulate the problem using recursively and solve it.  
  - Specification: Give a precise definition of the recursive subproblem you plan to solve. What and how? 
  - Also say how to extract the answer to the original problem before you made up the recursion.  
  - Solution: write the recurrence definition + explain why its correct.  
2. Find solutions "bottom up"
  - Identify the subproblem
  - Pick an appropriate Memoization data structure
  - Identify dependencies 
  - Loop and fill by evaluation order: Evaluate from independent to dependent 
  - Here you can find the space + time complexity.  
    - Space: size of array 
    - Time: entries in table, x time per entry
  - Write down the [Algorithm](notes/Algorithms.md)
