import React, { useState } from "react";
import { styles } from "../Avatar/styles";
import EmailForm from "./EmailForm";
import SupportEngine from "./SupportEngine";

const SupportWindow = (props) => {
  const [email, setEmail] = useState("");

  const username = "Support Wizard";
  const secret = "secret";
  const projectID = "9fc5ff33-97af-4fac-ae05-264e99afb765";

  const handleEmailSubmit = (user) => {
    setUser(user);
    // Assuming you want to set the chat as well, you may need to modify this part
    setChat(/* your logic to set the chat */);
  };

  return (
    <div
      className="transition-3"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? `1` : `0` },
      }}
    >
      {!email && <EmailForm setEmail={(email) => setEmail(email)} />}
      {email && (
        <SupportEngine
          projectID={projectID}
          userName={email} // Use the email as the username
          userSecret={secret}
        />
      )}
    </div>
  );
};

export default SupportWindow;
