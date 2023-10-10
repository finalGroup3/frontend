import "./Room.scss";
import { useState, useEffect, useContext } from "react";
import Chat from "./Chat";
import { LoginContext } from "../Auth/login/LogInContext";

function Room() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const state = useContext(LoginContext);


  useEffect(() => {
    state.socket?.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  
    return () => {
      state.socket?.off("getNotification");
    };
  }, [state.socket]);
  
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

  console.log(notifications)
  console.log(notifications[0])


  return (
    <>
   
     <div className="ChatApp">
      {
        state?.user?.role === 'user' ?
          (<Chat room = {state.user.id}  />) :
          !showChat
            ? (
              <>
               <section className="users-chat">
    <div className="notifications">
          {
            notifications.map((n,i) => {
              console.log(n)
              return (
                <p key={i}>{n.senderName} joined room {n.roomId}</p>
              )
            })
          }
        </div>
    </section>
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
              </>
             
            ) : (
              <Chat room = {room}  />
            )}
    </div>
    </>
   
  );
}

export default Room;