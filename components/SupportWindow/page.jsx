import React, { useState } from "react";
import { styles } from "../Avatar/styles";
import EmailForm from "./EmailForm";
import SupportEngine from "./SupportEngine";
const SupportWindow = (props) => {
  const [user, setUser] = useState(false);
  const [chat, setChat] = useState(false);
  const username = "Support Wizard";
  const secret = "Support ";
  const projectID = process.env.CE_PROJECT_ID;
  return (
    <div
      className="transition-3"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? `1` : `0` },
      }}
    >
      {/* <EmailForm
        // visible={user === null || chat === null}
        setUser={(user) => setUser(user)}
        setChat={(chat) => setUser(chat)}
      /> */}
      <SupportEngine
        // visible={user !== null && chat !== null}
        projectID={projectID}
        userName={username}
        userSecret={secret}
      />
    </div>
  );
};

export default SupportWindow;
