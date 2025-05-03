---
id: Kruskal's Algorithm
aliases:
  - Kruskal's Algorithm
tags: []
---

# Kruskal's Algorithm
[Video](https://youtu.be/JZBQLXgSGfs?si=jvHgL_6tXw2VcVXZ) 

> A [Greedy Algorithm](notes/Greedy%20Algorithm.md) used to get the [Minimum Spanning Tree](notes/Minimum%20Spanning%20Tree.md)

- The time complexity is $O(E log V)$
- However if you use a Min [Heap Data Structure](notes/Heap%20Data%20Structure.md), and you add all the edges to it, you should get back the minimum weight edge in $log n$ time, so your time complexity becomes: $O(E log E)$

## How it works
Always select the minimum cost edge, forming these "mini" subtrees in the process, and only add it if a cycle is **not** formed.  

If you want to detect [Graph](notes/Graph.md) cycles, use the **Disjoint set** data structure, and refer to each "mini" tree as a group.  


