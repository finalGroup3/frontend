import "./Room.css";
import { useState, useEffect, useContext } from "react";
import Chat from "./Chat";
import { LoginContext } from "../Auth/login/LogInContext";

function Room() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const state = useContext(LoginContext);
  const joinRoom = () => {
    state.socket?.emit("send_roomId", room);
    if (username !== "" && room !== "") {
      setShowChat(true);
    }
  };
  useEffect(() => {

    if (state.user?.role === 'user') {
      setShowChat(true)
    } 
  }, [showChat]);

  return (
    <div className="ChatApp">
      {
        state?.user?.role === 'user' ?
          (<Chat socket={state.socket} username={state.user.username} room={`${state.user.id}`} />) :
          !showChat
            ? (
              <div className="joinChatContainer">
                <h3>Join A Chat</h3>
                <input
                  type="text"
                  placeholder="Name..."
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Room ID..."
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                <button onClick={joinRoom}>Join Room</button>
              </div>
            ) : (
              <Chat  />
            )}
    </div>
  );
}

export default Room;