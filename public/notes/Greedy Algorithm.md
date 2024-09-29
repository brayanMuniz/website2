---
id: Greedy Algorithm
aliases:
  - Greedy Algorithm
tags: []
---

# Greedy Algorithm
“[Backtracking](notes/Backtracking.md) without the backtracking”

- there is one “obviously” best choice that we can commit to before doing any recursive calls or learning any consequences

## Exchange argument: 
1. Start with some optimal solution (not one necessarily found by ours or any other algorithm. Just the best choice over the set of solutions). If the optimal solution agrees with our first choice, then great! Otherwise… 
2. Do some kind of “exchange” in the optimal solution so it does use our first choice. 
3. Argue that the exchange didn’t increase the cost of the solution, so our new solution must also be optimal.

> You almost never want to use a greedy algorithm if your goal is a provably correct algorithm for a problem


