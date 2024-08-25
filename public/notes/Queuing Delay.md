---
id: Queuing Delay
aliases:
  - Queuing Delay
tags: []
---

# Queuing Delay
A great [article](https://encore.dev/blog/queueing) and a great [video](https://www.youtube.com/watch?v=b75LBPPzbaA)  
This is the buffer that the packet will wait in as it tries to go out.  
The interesting thing about this type of delay is that it can vary from packet to packet.  
For example if you are the first on in the queue, you don't have any delay, but if you are the last one, you might be dropped if the buffer is full.  
It is better to observe the total delay of the whole system using statistics.  
- Average queuing delay
- variance of queuing delay
- probability that the queuing delay exceeds some specified value.

### The golden rule 
> Design your system so that the traffic intensity is no greater than 1.

- $a$ denote the average rate at which packets arrive at the queue ($a$ is in units of packets/sec).  
- $R$ is the transmission rate; that is, it is the rate (in bits/sec) at which bits are pushed out of the queue.  
- Suppose, for simplicity, that all packets consist of $L$ bits.  
- Then the average rate at which bits arrive at the queue is $La$ bits/sec.  
Assume that the queue is very big, so that it can hold essentially an infinite number of bits.  
- The ratio $\frac{La}{R}$, called the ***traffic intensity***, often plays an important role in estimating the extent of the queuing delay.  
If $\frac{La}{R} > 1$, then the average rate at which bits arrive at the queue exceeds the rate at which the bits can be transmitted from the queue.  
In this unfortunate situation, the queue will tend to increase without bound and the queuing delay will approach infinity!

### Exponential Increase 
As the traffic intensity approaches 1, the average queuing delay increases rapidly
![qDelay](../Images/qDelay.png)  

### Packet Loss 
In reality, if the buffer of the queue exceeds the memory limit, the packet will be dropped.  



