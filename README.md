# Hola - Let's Talk

### Microsoft Teams Clone developed for **Microsoft Engage** Mentorship Program 2021. 

Hola is a web conferencing app that supports real-time sharing of audio and video. Hola lets you stay in touch with your friends and colleagues with its instant video calling feature.

### Features

- Multiple participants video calling.
- Mute/Unmute and Video on/off feature.
- Chat feature that lets the user chat before starting a video call, during the video call and after the call, once connected.
- Light/dark mode toggle button
- Screen Sharing
- Collaborative Whiteboard

### Glimpses

1. A sharing ID is generated for individual user, which is used to connect to the other peer. Once the user gets connected, the peers can chat with each other. <br />
![image](https://user-images.githubusercontent.com/64557504/125196854-0c499080-e279-11eb-8268-f20a3e3003b5.png)  <br />

2. On clicking the call button, the peers can share their audio and videos and simultaneously chat as well. <br />
![image](https://user-images.githubusercontent.com/64557504/125199280-18d2e680-e283-11eb-984d-767daa1b247f.png)  <br />

3. **Light/Dark Mode**: The toggle button at the top left corner lets user to switch to light/dark mode. <br />
![image](https://user-images.githubusercontent.com/64557504/125199884-e7a7e580-e285-11eb-9e4c-e1a70fdacca5.png)  <br />

4. Screen Sharing <br />
![image](https://user-images.githubusercontent.com/64557504/125200188-6d786080-e287-11eb-86bc-48d9074834b0.png)
![image](https://user-images.githubusercontent.com/64557504/125200077-eb883780-e286-11eb-90f3-5cdd3f7487dc.png)

5. **Collaborative Whiteboard**: This feature allows users to collaborate virtually through a canvas board and brainstorm during the meeting. <br />
![image](https://user-images.githubusercontent.com/64557504/125200895-7c144700-e28a-11eb-9688-2b9d6865d27d.png)

### Run Locally

#### For Windows/Linux/Mac

Open cmd or terminal  

``` shell 
git clone https://github.com/this-is-aishwarya/Hola.git 
cd Hola
npm install
npm run build
npm start
```
  
On a new terminal, start the Peer server  
``` shell
peerjs --port 443 --key peerjs --path /myapp   
```

Open http://localhost:8000/

### Libraries & Frameworks

**Frontend**
- Node Package Manager
- React JS

**Backend**
- ExpressJS
- PeerJS
- Socket-io

### Major Resources
[WebRTC connection using PeerJS](https://peerjs.com/docs.html) <br />
[Backend Services for WebRTC](https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/)

