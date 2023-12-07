// Import necessary libraries and components
"use client";
import { DashboardLayout } from "@/components/Layout";
import dynamic from "next/dynamic";
import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

// Create a context to manage the email state
const EmailContext = createContext();

// Define a provider component to wrap your app with the context
const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Check if the "email" exists in the local storage
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email");

      if (storedEmail) {
        // Email found in local storage
        console.log("Email found in local storage!");
        setEmail(storedEmail);
      }
    }
  }, []);

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
};

// Define a hook to easily access the context in your components
const useEmail = () => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error("useEmail must be used within an EmailProvider");
  }
  return context;
};

// Define the Chat component
const Chat = () => {
  // State variables
  const [showChat, setShowChat] = useState(false);
  const { email, setEmail } = useEmail(); // Access email from the context

  useEffect(() => {
    // Check if the "email" exists in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const newEmail = urlParams.get("email");

    if (newEmail) {
      // Execute your callback here
      console.log("Email query parameter exists!");

      // Remove the query parameter to prevent duplicate executions
      urlParams.delete("email");
      window.history.replaceState(
        {},
        "",
        window.location.pathname + "?" + urlParams.toString()
      );

      // Update the email in the context
      setEmail(newEmail);

      // Also, store the email in local storage for persistence
      if (typeof window !== "undefined") {
        localStorage.setItem("email", newEmail);
      }
    }

    // Show the chat when the component is mounted
    if (typeof document !== "undefined") {
      setShowChat(true);
    }
  }, [setEmail]);

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
  const username = email || ""; // Ensure username is not undefined
  const secret = "secret";
  const projectID = "30a0ab26-3bce-4bce-a5f6-523ba1ba2256";

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

// Export the Chat component wrapped with the EmailProvider
export default function WrappedChat() {
  return (
    <EmailProvider>
      <Chat />
    </EmailProvider>
  );
}
