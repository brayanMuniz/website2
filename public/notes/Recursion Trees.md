---
id: Recursion Trees
aliases:
  - Recursion Trees
tags: []
---

# Recursion Trees
[video](https://youtu.be/sLNPd_nPGIc?si=WGbN2F3Xs1FrYDIh) 
- simple, general, pictorial tool for solving divide-and-conquer recurrences
- rooted tree with one node for each recursive subproblem
- value of each node is the amount of time spent on the corresponding subproblem excluding recursive calls
- overall running time of the algorithm is the sum of the values of all nodes in the tree. 

## The Three patterns 
### Decreasing work
$$
\text{Root of the tree}
$$
### All level do the same amount of work 
$$
\text{Height of the Tree} \cdot \text{Work done per level}
$$
### Work increases 
$$
\text{Leaves of the Tree} 
$$

