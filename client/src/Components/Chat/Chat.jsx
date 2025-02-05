import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createSocketConnection } from "../../Utils/socket";
import { useSelector } from "react-redux";

const Chat = () => {
  const { targetUserId } = useParams();
  const user = useSelector((store) => store.user);
  const userId = user?._id;
  const [messages, setMessages] = useState([{ text: "Hello" }]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (!userId) return;
    const socket = createSocketConnection();

    socket.emit("joinChat", { userId, targetUserId });
  }, [userId, targetUserId]);

  return (
    <div className="w-1/2 mx-auto border border-gray-500 flex flex-col m-5 h-[77vh] rounded-md bg-gray-950">
      <h1 className="border-b border-gray-500 p-3 text-2xl font-semibold">
        Chat
      </h1>
      <div className="flex-1 overflow-scroll p-5 no-scrollbar">
        {messages.map((message, index) => {
          return (
            <div>
              <div className="chat chat-start">
                <div className="chat-header">
                  Obi-Wan Kenobi
                  <time className="text-xs opacity-50">2 hours ago</time>
                </div>
                <div className="chat-bubble">You were the Chosen One!</div>
                <div className="chat-footer opacity-50">Seen</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-header">
                  Obi-Wan Kenobi
                  <time className="text-xs opacity-50">2 hour ago</time>
                </div>
                <div className="chat-bubble">I loved you.</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-5 py-3 border-t border-gray-500 flex items-center gap-2">
        <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="flex-1 bg-transparent border border-gray-500 rounded-md p-2"></input>
        <button className="btn btn-primary px-10">Send</button>
      </div>
    </div>
  );
};

export default Chat;
