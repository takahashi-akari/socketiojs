import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

process.stdin.on("data", (data) => {
    socket.emit("message", data.toString());
});
