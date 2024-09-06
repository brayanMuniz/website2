---
id: HTTP Streaming
aliases:
  - HTTP Streaming
tags: []
---

# HTTP Streaming
video is simply stored at an HTTP server as an ordinary file with a specific URL. 
When a user wants to see the video, the client establishes a TCP connection with the server and issues an HTTP GET request for that URL.  
The server then sends the video file, within an HTTP response message, as quickly as the underlying network protocols and traffic conditions will allow. 
On the client side, the bytes are collected in a client application buffer. 
Once the number of bytes in this buffer exceeds a predetermined threshold, the client application begins playback—specifically, the streaming video application periodically grabs video frames from the client application buffer, decompresses the frames, and displays them on the user’s screen. 
Thus, the video streaming application is displaying video as it is receiving and buffering frames corresponding to latter parts of the video. 
- has a major shortcoming: All clients receive the same encoding of the video, despite the  large variations in the amount of bandwidth available to a client, both across different  clients and also over time for the same client.

## DASH
Dynamic Adaptive Streaming  over HTTP 
video is encoded into several different versions,  with each version having a different bit rate and, correspondingly, a different quality  level. The client dynamically requests chunks of video segments of a few seconds in  length. When the amount of available bandwidth is high, the client naturally selects  chunks from a high-rate version; and when the available bandwidth is low, it naturally  selects from a low-rate version.
