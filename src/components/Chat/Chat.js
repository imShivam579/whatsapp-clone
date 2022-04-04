import { Avatar, IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticonIcon,
  MicIcon,
} from "@material-ui/icons";
import db from "../../firebase";
// import MicIcon from '@material-ui/icons/Mic';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./chat.css";
function Chat() {
  const Random_SVG = "https://avatars.dicebear.com/api/human";
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState();
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, [roomId]);
  const submitMsg = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`${Random_SVG}/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last Seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciver"}`}>
          <span className="chat__name">unknown</span>
          Hell Users
          <span className="chat__timestamp">5:00pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message.."
            type="text"
            name=""
            id=""
          />
          <button onClick={submitMsg}>Send</button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
