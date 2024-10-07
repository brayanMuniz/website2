---
id: RDT
aliases:
  - RDT
tags: []
---

# Reliable Data Transfer
[Part 1](https://www.youtube.com/watch?v=nyUHUtmxWg0) 

## rdt 1.0 
![rdt1](../Images/rdt1.png) 
- assumed that the receiver is able to  receive data as fast as the sender happens to send data. Thus, there is no need for the  receiver to ask the sender to slow down! 
- all packet flow is from the sender to receiver; with a perfectly reliable channel there is no need for the receiver side to provide any feedback to the sender since  nothing can go wrong!

## rdt 2.0 
A more realistic model of the underlying channel is one in which bits in a packet may  be corrupted.  
bit errors typically occur in the physical components of a network  as a packet is transmitted, propagates, or is buffered
- Ack or NAK could be corrupted 
  - so resend, but its duplicate

## rdt 2.1
Takes care of the case where ACK or NAK is corrupt, by just resending the packet and numbering them 

## rdt 2.2
sequence number on ACK

## rdt 3.0
As the design of RDT 2.2 is a stop-and-wait for protocol. If there is a network issue and the acknowledgment/packet is lost. The sender waits infinitely for it. RDT 3.0 introduces a timer on the sender side if the acknowledgment is not received within a particular time the sender resends the packet. This method solves the issue of packet loss.

Channels with errors and losses
- timer, in case packets are lost or delayed 
Alternate between 0 and 1 to determine which one you are sending 

Send them in "chunks"(window packets) and that will determine the amount of numbers you will need in order to get them right.  

![r1](../Images/r1.png) 

### [Stop and Wait](notes/Stop%20and%20Wait.md)
### [Go-Back-N](notes/Go-Back-N.md)
### [Selective Repeat](notes/Selective%20Repeat.md)
