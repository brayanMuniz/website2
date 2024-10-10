---
id: Router
aliases:
  - Router
tags: []
---

# Router
[Video 1](https://www.youtube.com/watch?v=NfHR94JAO-s) 

## Architecture 
![img](../Images/a13.png) 

### Input Port
![img](../Images/b1.png) 
Physical Layer $\rightarrow$ Data Link Layer $\rightarrow$ Network Layer
- Terminates the physical layer.  
- In the data link layer, bits are assembled into frames.  
- Uses [Longest Prefix Matching](notes/Longest%20Prefix%20Matching.md) for lookup and forwarding.  

### Switching
Network inside of a network router  
Switching rate: rate at which packets can transferred from input to output
#### Types of switching
![img](../Images/b2.png) 

##### Memory
- Traditional Method of switching via a computer.  
- Input and output were traditional I/O devices and handles as interrupts.  
- Packet was copied from the input port to memory, handled there and copied to the outputs buffer.  
- Total memory bandwidth is $B/2$, where $B$ is the total memory bandwidth 
##### Bus
- All outputs receive the packet, but only the one with the matching label keeps the packet.  
##### Interconnection Network
- Controlled by switches. 
- If $A \rightarrow Y$, the switches in between them are closed, and being able to send the packet is possible. 
- Note: if two packets from two different input ports are destined to that same output port, then one will have to wait at the input, since only one packet can be sent over any given bus at a time.

## Queuing 
[video](https://www.youtube.com/watch?v=zfzzz9KQOog) 
![img](../Images/b3.png) 
Some Assumptions: 
- Suppose the transmission line speeds at the input and output lines are $R_\text{line}$
- There are $N$ input lines and output lines.  

### Input Port Queuing 
- Multiple packets can be transferred in parallel as long as their output ports are ***different***.  
![img](../Images/b4.png) 
The green packet wants to go to the green output, but the red packet is in front of it. This is Head of the Line Blocking.  

### Output Queuing 





