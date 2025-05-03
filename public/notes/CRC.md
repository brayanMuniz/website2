---
id: CRC
aliases:
  - CRC
tags: []
---

# CRC
> Cyclic Redundancy Check (CRC) 

[Neso Academy Video](https://www.youtube.com/watch?v=A9g6rTMblz4) 
![img](../Images/e5.png) 
Sender and receiver must agree upon a r + 1 bit pattern, known as a generator, $G$  
The leftmost bit of $G$ must be 1.  
##### Sender 
Send r additional bits to d, and make sure that is divisible by $G$.  

##### Receiver
If $\frac{d + r}{G}$ = 0, there is **not** an error, otherwise there is an error. 

###### How to find R
Given data bits $d$, that has length $L$ and the generator $G$, append $L -1$ bits to $d$.  
Perform binary division  
Your remainder is $R$  

[//]: # (TODO: It is difficult to get a good generator, much like how its difficutl to get a good hashing function)


