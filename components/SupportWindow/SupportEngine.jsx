import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "../Avatar/page";

const SupportEngine = ({ user, chat, visible }) => {
  const [showChat, setShowChat] = useState(false);
  const [email, setEmail] = useState("");
  const [chatId, setChatId] = useState("");
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedChatId = localStorage.getItem("chatId");
    if (storedEmail && storedChatId) {
      setEmail(storedEmail);
      setChatId(storedChatId);
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

  const Socket = useMemo(
    () =>
      dynamic(() =>
        import("react-chat-engine").then((module) => module["Socket"])
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
          <Socket
            projectID="30a0ab26-3bce-4bce-a5f6-523ba1ba2256"
            userName={email} // Pass the email as the username
            userSecret="secret"
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
