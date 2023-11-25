// Import necessary libraries and components
"use client";
import { DashboardLayout } from "@/components/Layout";
import dynamic from "next/dynamic";
import axios from "axios";
import { useState, useEffect } from "react";
// Define the Chat component
const Chat = () => {
  // State variables
  const [showChat, setShowChat] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");

  useEffect(() => {
    // Check if the "email" exists in the URL
    if (email) {
      // Execute your callback here
      console.log("Email query parameter exists!");

      // Remove the query parameter to prevent duplicate executions
      urlParams.delete("email");
      window.history.replaceState(
        {},
        "",
        window.location.pathname + "?" + urlParams.toString()
      );
    }

    // Show the chat when the component is mounted
    if (typeof document !== "undefined") {
      setShowChat(true);
    }
  }, [email]);

  // Dynamically import ChatEngine and MessageFormSocial components
  let ChatEngine;
  let MessageFormSocial;

  try {
    ChatEngine = dynamic(() =>
      import("react-chat-engine").then((module) => module.ChatEngine)
    );
    MessageFormSocial = dynamic(() =>
      import("react-chat-engine").then((module) => module.MessageFormSocial)
    );
  } catch (error) {
    console.error("Error loading dynamic imports:", error);
    // Handle the error or provide fallback components if necessary
    return null; // Return null or an error message component
  }

  // ChatEngine setup
  const username = email;
  const secret = "secret";
  const projectID = "9fc5ff33-97af-4fac-ae05-264e99afb765";

  // Render the component
  return (
    <DashboardLayout>
      {showChat && ChatEngine && (
        <div className="background">
          <div className="shadow">
            <ChatEngine
              height="100vh"
              projectID={projectID}
              userName={username}
              userSecret={secret}
              onNewMessage={() =>
                new Audio(
                  "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
                ).play()
              }
            />
          </div>
        </div>
      )}
    </DashboardLayout>
  );
};

// Export the Chat component
export default Chat;
