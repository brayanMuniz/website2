---
id: RDT
aliases:
  - RDT
tags: []
---

# Reliable Data Transfer

## rdt 1.0 
![rdt1](../Images/rdt1.png) 
- assumed that the receiver is able to  receive data as fast as the sender happens to send data. Thus, there is no need for the  receiver to ask the sender to slow down! 
- all packet flow is from the sender to receiver; with a perfectly reliable channel there is no need for the receiver side to provide any feedback to the sender since  nothing can go wrong!

## rdt 2.0 
A more realistic model of the underlying channel is one in which bits in a packet may  be corrupted.  
bit errors typically occur in the physical components of a network  as a packet is transmitted, propagates, or is buffered

Uses [ARQ](./ARQ.md) (Automatic Repeat reQuest) protocols for verification.  

