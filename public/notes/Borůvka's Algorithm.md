---
id: Borůvka's Algorithm
aliases:
  - Borůvka's Algorithm
tags: []
---

# Borůvka's Algorithm
> A way to solve the [Minimum Spanning Tree](notes/Minimum%20Spanning%20Tree.md) problem.  

> [!NOTE]
> A safe edge is an edge that is light and necessary. 
> Lemma: Every *safe edge* belongs to the minimum spanning tree.  

The way I like to visualize it is all the *safe edges* going out at once and connecting to each other.  

Add all the *safe edges* and then Recurse

- $O(E)$ time per operation 
- Always finds at least $\frac{\text{number of components}}{2}$ safe edges.  
- $O(log V)$ iterations
- $O(E log V)$ time

> [!NOTE]
> Out of all the algorithms for [Minimum Spanning Tree](notes/Minimum%20Spanning%20Tree.md), this one might perform better than [Kruskal's Algorithm](notes/Kruskal%27s%20Algorithm.md) or [Prim's Algorithm](notes/Prim%27s%20Algorithm.md).  

