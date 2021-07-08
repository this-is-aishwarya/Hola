const peer = new Peer(''+Math.floor(Math.random()*2**18).toString(36).padStart(4,0), {
    host: location.hostname,
    debug: 1,
    path: '/myapp'
});

window.peer = peer;
let myVideo;
var video = document.getElementById("remoteVideo");
var currentPeer;


function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: true, audio: false}).then( stream => {
        window.localStream = stream; // A
        myVideo=stream;
        // window.localAudio.srcObject = stream ;  // B
        // window.localAudio.autoplay = true; 
        window.localVideo.srcObject = stream;// C
        window.localVideo.autoplay = true;
    }).catch( err => {
        console.log("You got an error:" + err)
    });
}
getLocalStream();

let stop = k => localVideo.srcObject.getTracks().map(t => t.kind == k && t.stop());

const audioContainer = document.querySelector('.call-container');/**
 * Displays the call button and peer ID
 * @returns{void}
 */


function showCallContent() {
    window.caststatus.textContent = `Your device ID is: ${peer.id}`;
    callBtn.hidden = false;
    audioContainer.hidden = true;
}

/**
 * Displays the audio controls and correct copy
 * @returns{void}
 */

function showConnectedContent() {
    // window.caststatus.textContent = `You're connected`;
    callBtn.hidden = true;
    audioContainer.hidden = false;
}

let code;
function getStreamCode() {
    code = window.prompt('Please enter the sharing code');
}

let conn;
function connectPeers() {
    conn = peer.connect(code);
    data_channel = peer.connect(code)
}


peer.on('connection', function(connection){
    conn = connection;
    data_channel = connection;
    // data_channel.on('data', function(data){
    //     console.log('Incoming data', data);
    // });
});

peer.on('open', function () {
    window.caststatus.textContent = `Your device ID is: ${peer.id}`;
});


const callBtn = document.querySelector('.call-btn');
const messageContainer = document.getElementById("message-container")

callBtn.addEventListener('click', function(){
    getStreamCode();
    connectPeers();
    const call = peer.call(code, window.localStream); // A

    call.on('stream', function(stream) { // B
        window.remoteVideo.srcObject = stream; // C
        window.remoteVideo.autoplay = true; // D
        window.peerStream = stream; //E
        showConnectedContent(); //F    });
    })
})

peer.on('call', function(call) {
    const answerCall = confirm("Do you want to answer?")
 
    if(answerCall){
       call.answer(window.localStream) // A
       showConnectedContent(); // B
       call.on('stream', function(stream) { // C
          window.remoteVideo.srcObject = stream;
          window.remoteVideo.autoplay = true;
          window.peerStream = stream;
          currentPeer=call.peerConnection;
       });
    } else {
       console.log("call denied"); // D
    }
 });


// Chat feature
const msgsend = document.getElementById("msgsend");
msgsend.addEventListener('click', function (){
        data_channel.on('data',function(data){
            console.log('Received: '+ data);
            appendMessage(data);
            // document.write(data);
        });

    console.log(data_channel);
    message = document.getElementById('content');
    data_channel.send(message.value);
    //data_channel.send('Hello')
    //conn.close();
    //showCallContent();
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}

const chatpopup = document.getElementById('chatpopup')
const chat = document.getElementById('chat')
const close = document.getElementById('close')

chatpopup.addEventListener('click', () =>{
    chat.classList.add('show');
});

close.addEventListener('click', () =>{
    chat.classList.remove('show');
});

// -----------Collaborative Board-------------------
const boardpop = document.getElementById('boardpop')
const drawing = document.getElementById('drawing')
const closeboard = document.getElementById('closeboard')

boardpop.addEventListener('click', () =>{
    drawing.classList.add('show');
});

closeboard.addEventListener('click', () =>{
    drawing.classList.remove('show');
});

let canvas = document.getElementById("canvas");

canvas.width = 0.60 * window.innerWidth;
// canvas.height = window.innerHeight;
canvas.height = 0.60*window.innerHeight;

var io = io.connect("http://localhost:8000/", { transport : ['websocket'] });
let ctx = canvas.getContext("2d");

let x;
let y;
let mouseDown = false;

window.onmousedown = (e) => {
  ctx.moveTo(x, y);
  io.emit("down", { x, y });
  mouseDown = true;
};

window.onmouseup = (e) => {
  mouseDown = false;
};

io.on("ondraw", ({ x, y }) => {
  ctx.lineTo(x, y);
  ctx.stroke();
});

io.on("ondown", ({ x, y }) => {
  ctx.moveTo(x, y);
});

window.onmousemove = (e) => {
  x = e.clientX;
  y = e.clientY;

  if (mouseDown) {
    io.emit("draw", { x, y });
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

// Screen Share
 document.getElementById("screenshare").addEventListener('click', (e) => {
    navigator.mediaDevices.getDisplayMedia({
        video: {
            cursor: "always"
        },
        audio: {
            echoCancellation: true,
            noiseSuppression: true
        }
    }).then((stream) =>{
        let videoTrack = stream.getVideoTracks()[0];
        videoTrack.onended = function(){
            stopScreenShare();
        }
        let sender = currentPeer.getSenders().find(function(s){
            return s.track.kind == videoTrack.kind
        })
        sender.replaceTrack(videoTrack)
    }).catch((err) => {
        console.log("unable to get display media" + err)
    })
})

function stopScreenShare(){
    let videoTrack = window.localStream.getVideoTracks()[0];
    var sender = currentPeer.getSenders().find(function(s){
        return s.track.kind == videoTrack.kind;
    })
    sender.replaceTrack(videoTrack)
}

const hangUpBtn = document.querySelector('.hangup-btn');
hangUpBtn.addEventListener('click', function(){
    conn.close();
    showCallContent();
})


// conn.on('close', function(){
//     showCallContent();
// })


// Mute/Unmute function
function muteAudio(){
    const enabled = window.localStream.getAudioTracks()[0].enabled;
    if(enabled){
        window.localStream.getAudioTracks()[0].enabled = true;
    }else{
        window.localStream.getAudioTracks()[0].enabled = false;
    }
}

// document.getElementById("muteUnmute").addEventListener('click', (e) => {
//     const enabled = myVideo.getAudioTracks()[0].enabled;
//     if(enabled){
//         myVideo.getAudioTracks()[0].enabled = false;
//     }else{
//         myVideo.getAudioTracks()[0].enabled = true;
//     }
// })



