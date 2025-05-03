---
id: Lossless Join Decomposition
aliases:
  - Lossless Join Decomposition
tags: []
---

# Lossless Join Decomposition
> When you want to decompose a relation into a sub relation without losing *or* gaining any data. This is useful for [Database Normalization](notes/Database%20Normalization.md).  

[Jenny Lecuture](https://youtu.be/zb8ESEf36Zc?si=GVYtBm6aK--KB1rd) 

So you are given $R$ and you want to break that down into $R_1$ and $R_2$.  
There are a couple of things that must be true in order for this to work.  

1. There has to be an intersection in order for the *natural join* to happen. So $R_1 \cap R_2 \not = \phi$ 
- Note: The intersection can be a composite key
2. You must get back all the attributes. So $R_1 \cup R_2 = R$  
3. The key that you are using to join must be a super key, of either $R_1$ or $R_2$, so that you don't get back extra data.  
- The reason you get back extra data is because when you are doing the Cartesian join, it is mapping to multiple tuples, instead of just one.  

## Decomposing further
**Lossless decomposition** is a binary operator, so you can only decompose into 2 relations, so if you want to decompose further, you must do it for one relation.  

If you want to join, the same thing applies, join 2, then join again.  

## How to do it if given [Functional Dependency in DBMS](notes/Functional%20Dependency%20in%20DBMS.md)
Check the first 2 conditions.  
You can satisfy the third condition by getting the **attribute closure** on the key that intersects the two, and if its a candidate key for one of the relations, its valid.  


