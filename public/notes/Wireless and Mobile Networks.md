---
id: Wireless and Mobile Networks
aliases:
  - Wireless and Mobile Networks
tags: []
---

# Wireless and Mobile Networks
There are a couple of interesting things that arise when dealing with wireless networks, particularly on the host side.  
Since the access network is wireless and we are dealing with electromagnetic communications, we have to consider what happens when the host moves from one place to another.  

- Base Station: Responsible for sending and receiving packets, this is what the wireless host connects to.  
- Infrastructure Mode: host is connected to a **Base Station**.  
- Handoff/Handover: The process when a host moves from one **Base Station** to another. 
- Ad hoc network: If the host is not connected to a **Base Station**, the host must provide itself with network capable services, such as [DNS](notes/DNS.md) translation, Routing etx.. 

## Wireless Links and Network Characteristics 
Since we are dealing with electromagnetic waves, some properties must be looked at.  
- Decrease in strength as range increases 
- Interference from other sources 
- Some parts of the signal may *bounce* and lead to a blur for the receiver

### SNR 
> Signal to Noise Ratio 

We need to have a way in order to keep track of how much noise there is in our medium.  
For some reason, the decibel scale is used. 
![img](../Images/f4.png)

### CDMA
> Code division multiple access  
> This is also used in the [Link Layer](notes/Link%20Layer.md)

Using this, we can have multiple senders able to simultaneously send their messages to one receiver.  

#### How it works
[video](https://youtu.be/BkThmLtjQpE?si=WNgsS7jblWKvS161) 
> Note: For mathematical convenience we denote `0` as `-1` 

**Sender**:  
We encode each bit with a much faster rate, the **chipping rate**.  
> In the image, for the first sender on the top in the first slot, the code is going to be multiplied by the data bit `-1` 

Sum up the values for every sender.  

**Receiver**:  
The receiver can decipher the value using the code and get back the value that the sender meant to send.  
![img](../Images/f5.png)

## WiFi: 802.11 Wireless LANs

| Image | Description|
| -------------- | --------------- |
| ![img](../Images/f7.png) | An **AP** is an access point.   |

If there is no central Base or Router, and all the devices are talking together, this is known as an **ad hoc** network.  

### AP's in one area
Note that there are a limited amount of **AP's** that can be in a physical area, because the work over the frequency range of 2.4 GHz to 2.4835 GHz.  
Because of this, *channels* must be assigned in order to differentiate between the **AP's**.   
- There are 11 possible channels 
- Any channels are non overlapping if they are separates by 4 or more channels 
- So 1, 6 and 11 are the only **non-overlapping** channels 

### How devices connect to an AP
An **AP** has a Service Set Identifier (SSID).  
The device uses this to uniquely identify and connect to it.  

**AP's** periodically send out **beacon frames**, which includes the **SSID** and **MAC Address**.  

#### Passive Scanning and Active Scanning 
From the device side, the device *passively* listnes to these **beacon frames** in order to find **AP's**.  
When the device ***wants*** to find **AP's**, it send out **probe frame**.  
> This process is similar to **DHCP** from the [Internet Protocol](notes/Internet%20Protocol.md)  

#### Authentication 
- AP checks that the **MAC** address of the device is valid
- (Coffee shop method): Username and password 

### MAC Protocol 
802.11 uses the same collision handling as the [Link Layers](notes/Link%20Layer.md) **CSMA** protocol, with some modifications because of the nature of the medium.  
It is known as CSMA with collision avoidance, or **CSMA/CA**.  

There is no **collision detection** 

#### How it works
The frame is transmitted in its entirety.   
Once the **AP** receives the frame, it uses **CRC** a form of [Parity Checks](notes/Parity%20Checks.md),  waits a short while, called the ***Short Inter-frame Spacing (SIFS)***, and then sends an ACK.  
If the sender does not receive an ACK after a fixed number of retransmissions, it discards the frame.  



