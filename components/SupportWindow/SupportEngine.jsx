import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "../Avatar/page";

const SupportEngine = ({ user, chat, visible }) => {
  const [showChat, setShowChat] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setEmail(storedEmail);
    }

    if (visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    } else if (typeof document !== "undefined") {
      setShowChat(true);
    }

    // Clear the email from local storage once retrieved
    localStorage.removeItem("userEmail");
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
            projectID="0771af89-3ef1-486c-bc2d-8fc17abb0d33"
            userName={email} // Pass the email as the username
            userSecret="secret"
          />
          <ChatFeed activeChat="215972" />
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
