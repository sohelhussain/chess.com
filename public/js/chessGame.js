const socket = io();

socket.emit("event1");

// socket.on("data send", hay => {
//     console.log("data risec");
// })