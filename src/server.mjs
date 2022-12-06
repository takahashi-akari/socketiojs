import { Server } from "socket.io";

const io = new Server(8000);

io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("message", (data) => {
        console.log("message: " + data);
    });
});

io.listen(3000);
