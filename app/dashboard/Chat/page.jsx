"use client";
import { DashboardLayout } from "@/components/Layout";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const Chat = () => {
  // Check if document is available before setting showChat
  const [showChat, setShowChat] = useState(false);
  useEffect(() => {
    if (typeof document !== "undefined") {
      setShowChat(true);
    }
  }, []);
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

  // Environment variables for sensitive data
  const username = "Support";
  const secret = "Secret";
  const projectID = "6f18118b-9e6a-4c2b-a46e-596cad716793";
  return (
    <>
      <DashboardLayout>
        {showChat && ChatEngine && (
          <div className="background">
            <div className="shadow">
              <ChatEngine
                height="100vh"
                projectID={projectID}
                userName={username}
                userSecret={secret}
                // renderChatList={(chatAppState) => {
                //   <div />;
                // }}
                renderChatHeader={(chat) => {
                  <div />;
                }}
                // renderIceBreaker={(chat) => {
                //   <div />;
                // }}
                // renderNewMessageForm={() =>
                //   MessageFormSocial && <MessageFormSocial />
                // }
                // renderPeopleSettings={(creds, chat) => {
                //   <div />;
                // }}
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
    </>
  );
};

export default Chat;
