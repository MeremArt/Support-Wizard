import React from "react";
import { styles } from "../Avatar/styles";
import EmailForm from "./EmailForm";
const SupportWindow = (props) => {
  return (
    <div
      className="transition-3"
      style={{
        ...styles.supportWindow,
        ...{ opacity: props.visible ? `1` : `0` },
      }}
    >
      <EmailForm />
    </div>
  );
};

export default SupportWindow;
