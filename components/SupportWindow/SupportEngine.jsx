import dynamic from "next/dynamic";
import React, { useMemo, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "../Avatar/page";

const SupportEngine =
  (props) =>
  ({ userName, chatID, chatAccessKey, visible }) => {
    const [showChat, setShowChat] = useState(false);

    useEffect(() => {
      if (visible) {
        setTimeout(() => {
          setShowChat(true);
        }, 500);
      } else if (typeof document !== "undefined") {
        setShowChat(true);
      }
    }, [visible]);

    const ChatEngineWrapper = useMemo(() => {
      return dynamic(() =>
        import("react-chat-engine").then(
          (module) => module["ChatEngineWrapper"]
        )
      );
    }, []);

    const Socket = useMemo(() => {
      return dynamic(() =>
        import("react-chat-engine").then((module) => module["Socket"])
      );
    }, []);

    const ChatFeed = useMemo(() => {
      return dynamic(() =>
        import("react-chat-engine").then((module) => module["ChatFeed"])
      );
    }, []);

    return (
      <div className="transition-3" style={chatWindowStyles(visible)}>
        {showChat && (
          <ChatEngineWrapper>
            <Socket
              projectID="9fc5ff33-97af-4fac-ae05-264e99afb765"
              userName={props.user.email}
              chatID={props.chat.id}
            />
            <ChatFeed activeChat={props.chat.id} />
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
