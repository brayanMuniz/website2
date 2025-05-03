---
id: Binary Exponential Backoff
aliases:
  - Binary Exponential Backoff
tags: []
---

# Binary Exponential Backoff
> This is a method used for when things are colliding to one point and you have to find a way to randomly(but logically) resolve collisions. Used a lot with [Packets](notes/Packets.md) in [Computer Networking](notes/Computer%20Networking.md).   

When transmitting a frame that has already experienced $n$ collisions, a node chooses the value of $K$ at random from $\{0,1,2, . . . . 2^{n-1}\}$  
So if there is 1 collision, choose from 0, 1.  
If there are 2 collisions, choose from: 0, 1, 2, 3

