# Hola - Let's Talk ✨

### Microsoft Teams Clone developed for **Microsoft Engage** Mentorship Program 2021. 

Hola is a web conferencing app that supports real-time sharing of audio and video. Hola lets you stay in touch with your friends and colleagues with its instant video calling feature.

### 🌟 Features 

- Multiple participants video calling. 🌍
- An unique ID generation system for every individual user. 
- Mute or unmute at any point 🎤
- Video on/off to stop sharing video at any point 🎥
- Adopt- Chat feature that lets the user chat before starting a video call, during the video call and after the call, once connected. 🗨
- Light/dark mode toggle button 🌞/🌜
- Screen Sharing 💻
- Collaborative Whiteboard 📋🖌️

### 📸 Video Demo
https://www.youtube.com/watch?v=Cv5qIBCQxxs

### 🎉 Glimpses 

#### 1. A sharing ID is generated for individual user, which is used to connect to the other peer. Once the user gets connected, the peers can chat with each other. 

![image](https://user-images.githubusercontent.com/64557504/125196854-0c499080-e279-11eb-8268-f20a3e3003b5.png)  <br />

#### 2. On clicking the call button, the peers can share their audio and videos and simultaneously chat as well. 

![image](https://user-images.githubusercontent.com/64557504/125199280-18d2e680-e283-11eb-984d-767daa1b247f.png)  <br />

#### 3. **Light/Dark Mode**: The toggle button at the top left corner lets user to switch to light/dark mode. 

![image](https://user-images.githubusercontent.com/64557504/125199884-e7a7e580-e285-11eb-9e4c-e1a70fdacca5.png)  <br />

#### 4. Screen Sharing 

![image](https://user-images.githubusercontent.com/64557504/125200188-6d786080-e287-11eb-86bc-48d9074834b0.png)
![image](https://user-images.githubusercontent.com/64557504/125200077-eb883780-e286-11eb-90f3-5cdd3f7487dc.png)

#### 5. **Collaborative Whiteboard**: This feature allows users to collaborate virtually through a canvas board and brainstorm during the meeting.

![image](https://user-images.githubusercontent.com/64557504/125200895-7c144700-e28a-11eb-9688-2b9d6865d27d.png)

### ⚙️ Run Locally

##### For Windows/Linux/Mac

Open cmd or terminal  
1. Clone the github repository
``` shell 
git clone https://github.com/this-is-aishwarya/Hola.git 
```
2. Change the working directory
``` shell 
cd Hola
```
3. Install all libraries and dependencies
``` shell 
npm install
npm run build
```
4. Run the web app in the development mode
```shell
npm start
```
  
On a new terminal, start the Peer server  
``` shell
peerjs --port 443 --key peerjs --path /myapp   
```

Open http://localhost:8000/ to view the functioning on the browser.

### 📋 Instruction Manual

- To fully participate (and present) in a videoconference you need:
  - a webcam and headset, OR
  - a pair of headphones and a webcam with built-in microphone
- If you do not have a webcam and/or headset you can communicate via chat.
- To start a call, enter the sharing code of the other user and once connected, the audio and video sharing starts.
- Audio is turned off by default.
- The button on the top-left corner of the screen lets the user toggle between light and dark mode.
- The panel at the bottom consists of various controls described below (left to right) 
  - Share Screen
  - Mute/Unmute
  - Call End 
  - Video on/off
  - Chat
 - The button on the top-right corner opens up the collaborative whiteboard.
 
### 🛠 Libraries & Frameworks 

**Frontend**
- Node Package Manager
- React JS
- Socket-IO Client

**Backend**
- ExpressJS
- PeerJS
- Socket-io

### 🧑🏻‍💻 Technology Decisions

- **IDE**: Visual Studio Code
- **Platform**: WebRTC
- **Version Control System**: Github

### 📰 Major Resources
[WebRTC connection using PeerJS](https://peerjs.com/docs.html) <br />
[Backend Services for WebRTC](https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/)
