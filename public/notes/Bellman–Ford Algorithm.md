---
id: Bellman–Ford Algorithm
aliases:
  - Bellman–Ford Algorithm
tags: []
---

# Bellman–Ford Algorithm
[Video](https://youtu.be/lyw4FaxrwHg?si=3Emac_4UEuL9kdHD) 

> This is a [Single Source Shortest Paths](notes/SSSP.md) algorithm that is able to detect negative edge weight cycles.  

> When to use this algorithm? When [Dijkstra's Algorithm](notes/Dijkstra%27s%20Algorithm.md) fails, mostly because a cycle is found because of more than one negative edge weight. 

- Runs in $O(VE)$ time

- $V - 1$ iterations happen in order for the algorithm to be complete. This is because the shortest path between any two nodes in a graph without a negative cycle will involve at most $(V - 1)$ edges.


I like to think about this algorithm as a simple algorithm. Traverse the [Graph](notes/Graph.md), update the links, relaxing the edges on the way.  

## How it works
1. Initial Step  
Set $s$ to 0, and all other nodes to $\infin$

2. Traversal and Relaxation   
If the path to that node is smaller than the current path set in the table, *relax* it and keep traversing.  
3. Graph Detection  
After you finish the $V -1$ iterations, if you can keep making the connection smaller, then a negative cycle is there.  

> [!NOTE]
> There are 2 types of negative cycles. When the cycle in the node results in a decreased traversal value. A negative self loop.  

