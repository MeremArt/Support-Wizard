"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SupportEngine = (props) => {
  const [showChat, setShowChat] = useState(false);

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
  const dynamicImport = (componentName) =>
    dynamic(() =>
      import("react-chat-engine").then((module) => module[componentName])
    );

  // Wrap all dynamic imports in a try-catch block
  let ChatEngineWrapper;
  let Socket;
  let ChatFeed;

  try {
    ChatEngineWrapper = dynamicImport("ChatEngineWrapper");
    Socket = dynamicImport("Socket");
    ChatFeed = dynamicImport("ChatFeed");
  } catch (error) {
    console.error("Error loading dynamic imports:", error);
    return null;
  }

  return (
    <div className="transition-3" style={chatWindowStyles(props.visible)}>
      {showChat && (
        <ChatEngineWrapper>
          <Socket
            projectID={process.env.REACT_APP_CE_PROJECT_ID}
            userName={props.user.email}
            userSecret={props.user.email}
          />
          <ChatFeed activeChat={props.chat.id} />
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
