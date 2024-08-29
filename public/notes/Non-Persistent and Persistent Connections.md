---
id: Non-Persistent and Persistent Connections
aliases:
  - Non-Persistent and Persistent Connections
tags: []
---

# Non-Persistent and Persistent Connections
When this [Client Server Model](./Client%20Server%20Model.md) interaction is taking place over [TCP](./TCP.md), the application developer needs to make an important decision—should each request/response pair be sent over a separate TCP connection, or should all the requests and their corresponding responses be sent over the same TCP connection? 

## Non-Persistent 
Multiple TCP connections.  
Brand-new connection must be established and maintained for each requested object.  
For each of these connections, TCP buffers must be allocated, and TCP variables must be kept in both the client and server.  
This can place a significant burden on the Web server, which  may be serving requests from hundreds of different clients simultaneously.

- Requires 2 $RTT$ per object

## Persistent
Same TCP connection
Remains open when the client makes a request, closes after a while.  
- One $RTT$ for each referenced object

### Pipe lining 
- Client sends request as soon as it encounters a referenced object 
- As little as one $RTT$ for all the referenced objects 

