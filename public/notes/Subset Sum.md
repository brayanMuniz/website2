---
id: Subset Sum
aliases:
  - Subset Sum
tags: []
---

# Subset Sum
A [Backtracking](notes/Backtracking.md) problem.  
Given a set $X$ of integers + a target integer $T$.  
Decide: Is there any subset of $X$ that sums to $T$.  
- Cant take multiple copies

## Cases 
- $T = 0$, return True
- $T < 0$ or $T > 0$ but $X = \{\}$, return False 

If there is a solution to the problem, it either uses $x$ or not.  
- Try both options

- To make recursion easier, sort $X$

