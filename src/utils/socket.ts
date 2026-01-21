import { io } from "socket.io-client";
export const socket = io(
  "https://suretrustg29fsd-smp-backend-yash.onrender.com",
  {
    transports: ["polling", "websocket"],
    autoConnect: true,
  },
);
