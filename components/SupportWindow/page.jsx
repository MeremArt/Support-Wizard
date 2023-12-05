import React, { useState, useEffect } from "react";
import { styles } from "../Avatar/styles";
import EmailForm from "./EmailForm";
import SupportEngine from "./SupportEngine";

const SupportWindow = (props) => {
  // const storedEmail = localStorage.getItem("userEmail");
  // const [email, setEmail] = useState(storedEmail || "");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState(null);
  const [emailFormVisible, setEmailFormVisible] = useState(true);

  const handleEmailSubmit = (email, user, chat) => {
    setEmail(email);
    setUser(user);
    setChat(chat);

    // Log the email to the console
    console.log("Email passed through SupportWindow:", email);
    localStorage.setItem("userEmail", email);

    // Hide the EmailForm only after the email is successfully passed
    setEmailFormVisible(false);
  };

  useEffect(() => {
    // Clear the email from local storage on component mount
    localStorage.removeItem("userEmail");
  }, []);

  useEffect(() => {
    // Show the EmailForm only if the email is not available
    if (!email && !emailFormVisible) {
      setEmailFormVisible(true);
    }
  }, [email, emailFormVisible]);

  return (
    <div
      className="transition-3"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? `1` : `0` },
      }}
    >
      {emailFormVisible && (
        <EmailForm
          visible={user === null || chat === null}
          setUser={(user) => setUser(user)}
          setChat={(chat) => setChat(chat)}
          setEmail={(email) => setEmail(email)}
          handleEmailSubmit={handleEmailSubmit}
        />
      )}

      {email !== "" ? (
        <SupportEngine visible={user !== null && chat !== null} />
      ) : (
        <div>
          {/* Optional: Display a message or component when email is not passed */}
          Email not yet provided
        </div>
      )}
    </div>
  );
};

export default SupportWindow;
