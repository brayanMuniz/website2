---
id: Floyd Warshall Algorithm
aliases:
  - Floyd Warshall Algorithm
tags: []
---

# Floyd Warshall Algorithm
> The main algorithm used to solve the [All-Pairs Shortest Paths](notes/All-Pairs%20Shortest%20Paths.md) problem.  

- Result is a $V x V$ matrix
- Time complexity is $V^{3}$


[Video by the GOAT, Abdul](https://www.youtube.com/watch?v=oNI0rf2P9gE) 


## How it works 
> The main reason why you would use this over something like applying a [Single Source Shortest Paths](notes/SSSP.md) algorithm to every vertex is the user of [Dynamic Programming](notes/Dynamic%20Programming.md).  

Start off with a $V \times V$ matrix. This will also be your result.  
This will tell you the distance from every vertex to every other vertex, with the diagonal being 0, because a vertex going to itself is 0. 


The meat and potatoes of the algorithm is this: 
$$
A^{k}[i,j] = \text{min}\{A^{k-1}[i,j], A^{k-1}[i,k]+ A^{k-1}[k,j]\} 
$$

If you find a shorter path to a vertex update the matrix.  

## Time complexity 
Making the matrix is $O(V^{2}$ and trying to find a new shorter path for each vertex is $O(V)$





