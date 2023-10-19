"use client";
import { styles } from "./styles";
import { useState } from "react";

const Avatar = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={props.style}>
      <div
        className="transition-3"
        style={{
          ...styles.avatarHello,
          ...{ opacity: hovered ? `1` : `0` },
        }}
      >
        Connect with a Wizard
      </div>
      <div
        className="transition-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? `1px solid #8A88FB` : `4px solid #8A88FB` },
        }}
      ></div>
    </div>
  );
};

export default Avatar;
