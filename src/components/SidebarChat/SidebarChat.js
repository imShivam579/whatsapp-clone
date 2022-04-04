import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarChat.css";

function SidebarChat({ addNewChat }) {
  const Random_SVG = "https://avatars.dicebear.com/api/human";
  const [seed, setSeed] = useState("");
  const createChat = () => {
    const roomName = prompt("Enter Room name");
    if (roomName) {
      // do some stuff
    }
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`${Random_SVG}/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
}

export default SidebarChat;