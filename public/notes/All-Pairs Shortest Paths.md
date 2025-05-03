---
id: All-Pairs Shortest Paths
aliases:
  - All-Pairs Shortest Paths
tags: []
---


# All-Pairs Shortest Paths
> A way to get the shortest path from every vertex to every other vertex.  

> The desired output should be a $V \times V$ table that has the path from every Vertex to every other Vertex.  

> This should be very helpful in the [Network Layer](notes/Network%20Layer.md) for example, when trying to find the shortest path for each router.  

## Cant I just run an algorithm used to solve [Single Source Shortest Paths](notes/SSSP.md), and run it for every vertex? 
While you could do that, you have to keep in mind that some Algorithims depends on $V$ and if you are running that on order $V$ times, your algorithm might become slow.  
Besides, you should be able to *learn* from every other vertex.  
Learn? Yes! [Dynamic Programming](notes/Dynamic%20Programming.md)!

## Where is my *reduction*? 
In order to use **Dynamic Programming**, something must be reduced.  
The problem that we might encounter here is that there might be ***cycles***, if you are *only* looking at the value of the edge weighs.  
This leads to a lack of *reduction* because you can *always* find a smaller length.  
So instead of looking at the *value* of the edge weights, why not look at the edge weights we are *allowed* to use? 
You can reach this thinking by just considering using something like [Dijkstra's Algorithm](notes/Dijkstra%27s%20Algorithm.md) and then noticing that there is an optimal path from one vertex to another, and *learning* from that.   

### The problem with edges
One thing to note is that when you derive the *subproblems*, you will get $O(V^{4})$ time. 
Another way to do this is by going trough the same logic, but instead of thinking about the *edges* that you can use, instead think about all the *vertices* that you can use.  

## The path with vertices 
Finally, we have reached the [Floyd Warshall Algorithm](notes/Floyd%20Warshall%20Algorithm.md).  


