import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";

const SupportEngine = (props) => {
  const [showChat, setShowChat] = useState(false);
  const username = "Emotional-damage";
  const secret = "Secret";
  const chatID = "209340";

  // Use a single useEffect for handling both cases
  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        setShowChat(true);
      }, 500);
    } else if (typeof document !== "undefined") {
      setShowChat(true);
    }
  }, [props.visible]); // Rerun this effect when props.visible changes

  // Use a single dynamic import for all required components
  // Use the useMemo hook to load the components only once
  const ChatEngineWrapper = useMemo(() => {
    return dynamic(() =>
      import("react-chat-engine").then((module) => module["ChatEngineWrapper"])
    );
  }, []);

  const ChatSocket = useMemo(() => {
    return dynamic(() =>
      import("react-chat-engine").then((module) => module["ChatSocket"])
    );
  }, []);

  const ChatFeed = useMemo(() => {
    return dynamic(() =>
      import("react-chat-engine").then((module) => module["ChatFeed"])
    );
  }, []);

  return (
    <div className="transition-3" style={chatWindowStyles(props.visible)}>
      {showChat && (
        <ChatEngineWrapper>
          <ChatSocket
            projectID="6f18118b-9e6a-4c2b-a46e-596cad716793"
            senderUsername={username}
            chatID="210851"
            chatAccessKey="ca-57c22045-d8ac-4496-ab70-d850ddfbdb70"
          />
          <ChatFeed activeChat="210851" />
        </ChatEngineWrapper>
      )}
    </div>
  );
};

// Define chat window styles using a separate function
const chatWindowStyles = (isVisible) => ({
  width: "100%",
  backgroundColor: "#fff",
  height: isVisible ? "100%" : "0px",
  zIndex: isVisible ? "100" : "0",
});

export default SupportEngine;
