import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "../Avatar/page";

const SupportEngine = ({ user, chat, visible }) => {
  const [showChat, setShowChat] = useState(false);
  const [email, setEmail] = useState("");
  const [chatId, setChatId] = useState("");
  const [accessKey, setAccessKey] = useState("");
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedChatId = localStorage.getItem("chatId");
    const storeAccessKey = localStorage.getItem("accessKey");
    if (storedEmail && storedChatId && storeAccessKey) {
      setEmail(storedEmail);
      setChatId(storedChatId);
      setAccessKey(storeAccessKey);
    }

    if (visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    } else if (typeof document !== "undefined") {
      setShowChat(true);
    }

    // Clear the email from local storage once retrieved
    console.log(storedChatId);
    console.log(storeAccessKey);
    localStorage.removeItem("userEmail");
    localStorage.removeItem("chatId");
  }, [visible]);

  const ChatEngineWrapper = useMemo(
    () =>
      dynamic(() =>
        import("react-chat-engine").then(
          (module) => module["ChatEngineWrapper"]
        )
      ),
    []
  );

  const ChatSocket = useMemo(
    () =>
      dynamic(() =>
        import("react-chat-engine").then((module) => module["ChatSocket"])
      ),
    []
  );

  const ChatFeed = useMemo(
    () =>
      dynamic(() =>
        import("react-chat-engine").then((module) => module["ChatFeed"])
      ),
    []
  );

  return (
    <div className="transition-3" style={chatWindowStyles(visible)}>
      {showChat && (
        <ChatEngineWrapper>
          <ChatSocket
            projectID="f65d0d7e-3dbd-4fb4-bb60-b26596613991"
            senderUsername={email} // Pass the email as the username
            chatID={chatId}
            chatAccessKey={accessKey}
          />
          <ChatFeed activeChat={chatId} />
        </ChatEngineWrapper>
      )}
    </div>
  );
};

const chatWindowStyles = (isVisible) => ({
  width: "100%",
  backgroundColor: "#fff",
  height: isVisible ? "100%" : "0px",
  zIndex: isVisible ? "100" : "0",
});

export default SupportEngine;
