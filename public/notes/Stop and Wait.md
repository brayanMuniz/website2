---
id: Stop and Wait
aliases:
  - Stop and Wait
tags: []
---

# Stop and Wait
[Neso Video](https://youtu.be/n09DfvemnTQ?si=TkU5XeAXYqXVFtaN)  
**Sender** side  
**Rule 1**: Send one data packet at a time.  
**Rule 2**: Send the next packet only after receiving ACK for the previous.

**Receiver** side  
**Rule 1**: Receive and consume data packet.  
**Rule 2**: After consuming packet, ACK needs to be sent (Flow Control).

#### Problems
1. **Problems due to lost data**  
   Sender waits for ACK for an finite amount of time.  
   Receiver waits for data an finite amount of time.

2. **Problems due to lost ACK**  
   Sender waits for an infinite amount of time for ACK.

3. **Problems due to delayed ACK/data**  
   After timeout on the sender side, a delayed ACK might be wrongly considered as ACK of some other data packet.


