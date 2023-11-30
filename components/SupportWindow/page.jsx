import React, { useState } from "react";
import { styles } from "../Avatar/styles";
import EmailForm from "./EmailForm";
import SupportEngine from "./SupportEngine";

const SupportWindow = (props) => {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);

  const username = "Support Wizard";
  const secret = "secret";
  const projectID = "9fc5ff33-97af-4fac-ae05-264e99afb765";

  const handleEmailSubmit = (user, chat) => {
    setUser(user);
    setChat(chat);
  };

  return (
    <div
      className="transition-3"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? `1` : `0` },
      }}
    >
      <EmailForm
        visible={user === null || chat === null}
        setUser={(user) => setUser(user)}
        setChat={(chat) => setChat(chat)}
        setEmail={(email) => setEmail(email)}
        handleEmailSubmit={handleEmailSubmit}
      />

      <SupportEngine
        visible={user !== null && chat !== null}
        user={user}
        chat={chat}
      />
    </div>
  );
};

export default SupportWindow;
