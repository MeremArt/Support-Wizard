import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "../Avatar/page";

const SupportEngine = ({ user, chat, visible }) => {
  const [showChat, setShowChat] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Retrieve the email from local storage
    const storedEmail = localStorage.getItem("userEmail");
    setEmail(storedEmail || "");

    if (visible && storedEmail) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    } else if (typeof document !== "undefined") {
      setShowChat(true);
    }
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

  // Log the email when it is passed successfully
  useEffect(() => {
    if (email && showChat) {
      console.log("Email passed to SupportEngine:", email);
    }
  }, [email, showChat]);

  return (
    <div className="transition-3" style={chatWindowStyles(visible)}>
      {showChat && (
        <ChatEngineWrapper>
          <Socket
            projectID="9fc5ff33-97af-4fac-ae05-264e99afb765"
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

SupportEngine.displayName = "SupportEngine";
export default SupportEngine;
