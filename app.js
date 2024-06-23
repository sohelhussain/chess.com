const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");

// creat http server and connect with express server

const app = express();
const server = http.createServer(app);
const io = socket(server);

//setup chess
const chess = new Chess();
let player = {};
let currentPlayer = 'W';

io.on('connection', socket => {
    console.log("connection build");
    socket.on("event1", ser => {
        //io.emit("data send"); // this line will send the data to every one
        // console.log("churan received");

        // socket.on("disconnect", () => {
        //     console.log("disconnect");
        // });
    })
})


// setup views folder

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function (req, res) {
    res.render("index")
})



//we make sure to start the server with server not the app instance of the express server

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});