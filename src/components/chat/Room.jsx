import "./Room.scss";
import { useState, useEffect, useContext } from "react";
import Chat from "./Chat";
import { LoginContext } from "../Auth/login/LogInContext";
import img from '../../imgs/user (5).png'

function Room() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [notifications, setNotifications] = useState([
     
  ]);

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

  // console.log(notifications)
  // console.log(notifications[0])


  return (
    <>
    <div className="chat-contain">
 <h2>chat App</h2>
 <p className='top-starts-chat'>✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧ ✧  </p>

     {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate consequatur maiores est!</p> */}
     <div className="ChatApp">
    
      {
        state?.user?.role === 'user' ?
          (<Chat room = {state.user.id}  />) :
          !showChat
            ? (
              <>
               <section className="chatRoom">
    <div className="notifications">
      <p className="user-list-title">open Chats</p>
          {
            notifications.map((n,i) => {
              console.log(n)
              return (
                <div key={i} className="notification-item">

<li >
  <img  className = 'user-img-chat' src={img}/>
  <span className="span-contain">

    <span className="senderName"> {n.senderName}</span>
  <span className="roomId">joined room {n.roomId}</span>

  </span>
  
</li>
                
                </div>

              )
            })
          }
        </div>
    </section>
               <div className="joinChatContainer">
                <h3>✧✧ Join A Chat ✧✧   <p>- - - - - - - - - - - - - - - - </p></h3>
             
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

    </div>
    
    </>
   
  );
}

export default Room;