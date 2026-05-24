import { io } from "socket.io-client";

let socket = null;

export const connectSocket = () => {

  if (!socket) {

    socket = io(import.meta.env.VITE_BACKEND_URL, {
      withCredentials: true,
      
    });

    socket.on("connect", () => {
      console.log("SOCKET CONNECTED");
    });

    socket.on("connect_error", (err) => {
      console.log(err.message);
    });
  }

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};