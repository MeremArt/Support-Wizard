import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";
import axios from "axios";
const SupportEngine = (props) => {
  const [showChat, setShowChat] = useState(false);
  const [email, setEmail] = useState("");
  const [chatId, setChatId] = useState(null);
  const username = "Emotional-damage";
  const secret = "Secret";
  const chatID = "209340";
  // getting chatid

  useEffect(() => {
    const createOrUpdateUser = async () => {
      const requestData = {
        usernames: [{ email }],
        title: "chuksaginamada1@gmail.com",
        is_direct_chat: false,
      };

      const headers = {
        "Content-Type": "application/json",
        "Private-Key": "8b8c5f42-a1e4-41f7-800b-a1ecd79e4924",
        "User-Name": "chuksaginamada@gmail.com",
        "User-Secret": "secret",
      };

      try {
        const response = await axios.put(
          "https://api.chatengine.io/users/",
          requestData,
          { headers }
        );

        // Log the entire response for both success and failure
        console.log("API Response:", response);

        // Extract chatId from the response
        const chatId = response?.data?.data?.id || null;
        setChatId(chatId);
        console.log("Chat ID:", chatId);
      } catch (error) {
        // Log the entire error object for failure
        console.error("Error creating or updating user:", error);

        // Check if the error has a response and log its status, data, and headers
        if (error.response) {
          console.error(
            "Error Response:",
            error.response.status,
            error.response.data,
            error.response.headers
          );
        }
      }
    };

    createOrUpdateUser();
  }, [email]);
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
    <div className="transition-3" style={chatWindowStyles(true)}>
      {showChat && (
        <ChatEngineWrapper>
          <ChatSocket
            projectID="9fc5ff33-97af-4fac-ae05-264e99afb765"
            senderUsername={email}
            chatID={chatId}
            chatAccessKey="8b8c5f42-a1e4-41f7-800b-a1ecd79e4924"
          />
          <ChatFeed activeChat={chatId} />
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
