---
id: Maximum Flow
aliases:
  - Maximum Flow
tags: []
---

# Maximum Flow
> Given an infinite input source, how much of something can you push through the [Flow Network](notes/Flow%20Network.md) before you are capped? 

> I like to think of using [UDP](notes/UDP.md) here, since it is a protocol that does not care about congestion. Just send it, *how hard can you send it?*  

You use the [Maxflow-Mincut Theorem](notes/Maxflow-Mincut%20Theorem.md) in order to find this answer.  
