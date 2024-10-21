---
id: Link Layer
aliases:
  - Link Layer
tags: []
---

# Link Layer
The link layer is responsible for sending datagrams in devices that are physically adjacent.   

Provides a couple of services in order to do this

## Services 
### Framing
### Link Access 
### Reliable Delivery 

## NIC 
> Network Interface Card

This is where the **Link Layer** is implemented.  
Every device capable of having a **NIC** runs the **Link Layer**.  
Uses a combination of both hardware and software.  
![img](../Images/e1.png) 

I like to think about this process as how the Onion Router works, adding layers and then removing them.  
### Sending 
> In the image, the flow goes from top to bottom. 

Takes the datagram that has been made, and encapsulates it into a link layer frame, setting the additional fields so the link layer can use it.  

### Receiving 
> Flow: Bottom to top

Receives the frame and extracts the contents from the link layer frame.  
If the error header is set, error handling is used.  

## Error detection and correction 

D: datagram   
EDC: Error detection and Correction bits  
![img](../Images/e2.png) 

### Parity Checks
#### Single Parity 
Both parties agree on what type of parity they want to use, even or odd.  
The sender includes an additional bit such that the 1's in the data bits will be even or odd. 
![img](../Images/e3.png) 
> Even parity 

If there is an odd number of bits, but an even parity was agreed upon, then an error was detected.  
What if two bits were flipped? Would it still be even?  
It would, and in fact most errors don't occur in a single bit but in ***bursts***.  

#### 2D Parity 
![w](../Images/e4.png) 
> 2D even parity 

If a single bit error is detected, we are able to not only detect it, but also **correct** it. 
Can detect(but not correct), any combination of 2 bit errors in the packet.  

The ability of the receiver to both detect and correct errors is known as forward error correction (FEC)

#### Cyclic Redundancy Check (CRC) 
[Neso Academy Video](https://www.youtube.com/watch?v=A9g6rTMblz4) 
![img](../Images/e5.png) 
Sender and receiver must agree upon a r + 1 bit pattern, known as a generator, $G$  
The leftmost bit of $G$ must be 1.  
##### Sender 
Send r additional bits to d, and make sure that is divisible by $G$.  

##### Receiver
If $\frac{d + r}{G}$ = 0, there is **not** an error, otherwise there is an error. 

#### Checksumming 
Take a look at [Internet Checksum](notes/Internet%20Checksum.md)
> Why is checksumming used at the transport layer and cyclic redundancy  check used at the link layer?  

[Transport Layer](notes/Transport%20Layer.md) error detection is implemented in software, it is important to have a simple and fast  error-detection scheme. Error detection at  the link layer is implemented in dedicated hardware in adapters, which can rapidly  perform the more complex CRC operations







