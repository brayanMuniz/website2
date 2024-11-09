---
id: Ethernet
aliases:
  - Ethernet
tags: []
---

# Ethernet
> provides an unreliable service to the [Link Layer](notes/Link%20Layer.md) layer  

> I like to think about it like [UDP](notes/UDP.md) for the link layer

## Ethernet Frame
| Image | Description |
| -------------- | --------------- |
| ![img](../Images/f9.png) | The sender encapsulates the **IP datagram** and sends it to the physical layer. |

There are a couple of parts of the frame that I want to point out:
- Data field must be at least **46 bytes**, if there is not enough data, then padding will be used to fill this out.  
- **Type Field**: The sender is able to **multiplex** other network protocols, and the receiver is able to **demultiplex** it. 
- **[CRC](notes/CRC.md)**: This is how Ethernet is able to provide an *unreliable* service
- The minimum size of a frame is **64 bytes** 

