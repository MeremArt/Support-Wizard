import React, { useState } from "react";
import { styles } from "../Avatar/styles";
import EmailForm from "./EmailForm";

const SupportWindow = (props) => {
  const [user, setUser] = useState(false);
  const [chat, setChat] = useState(false);
  return (
    <div
      className="transition-3"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? `1` : `0` },
      }}
    >
      <EmailForm
        // visible={user === null || chat === null}
        setUser={(user) => setUser(user)}
        setChat={(chat) => setUser(chat)}
      />
      {/* <SupportEngine
        visible={user !== null && chat !== null}
        user={user}
        chat={chat}
      /> */}
    </div>
  );
};

export default SupportWindow;
