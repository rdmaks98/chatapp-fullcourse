import io from "socket.io-client"; // Add this

let socket;

const connectSocket = (user_id) => {
  console.log(user_id , " 12232231 ");
  if (user_id) {
    socket = io("http://172.16.16.185:3001/", {
    query: `user_id=${user_id}`,
  });
  }
  
  console.log(socket,"index soceket");
} // Add this -- our server will run on port 4000, so we connect to it from here
export { socket, connectSocket };
