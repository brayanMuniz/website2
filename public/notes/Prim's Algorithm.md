---
id: Prim's Algorithm
aliases:
  - Prim's Algorithm
tags: []
---

# Prim's Algorithm
> A [Greedy Algorithm](notes/Greedy%20Algorithm.md) that uses a **priority queue** in order to get the [Minimum Spanning Tree](notes/Minimum%20Spanning%20Tree.md).  

[video](https://www.youtube.com/watch?v=jsmMtJpPnhU) 

Time Complexity: $O((V + E) \log V)$ using a priority queue and adjacency list.

## How it works
1. Pick a vertex, add the connecting edges to a priority queue.  
2. Pick the most *promising* edge, go off of that one.  
3. Keep going, making sure not to create any cycles along the way. Do this by keeping track of the vertices already in the min spanning tree. 
