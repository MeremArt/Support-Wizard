import React, { useState } from "react";
import Avatar from "../Avatar/page";
import { styles } from "../Avatar/styles";
import CircularProgress from "@mui/material/CircularProgress";
const EmailForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(``);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  };
  return (
    <div
      style={{
        ...styles.emailFormWindow,
        ...{
          height: `100%`,
          opacity: `1`,
        },
      }}
    >
      <div styles={{ height: `0px` }}>
        <div style={styles.stripe} />
      </div>
      <div
        className="transition-3"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? `10` : `-1`,
            opacity: loading ? `0.33` : `0`,
          },
        }}
      />
      <center>
        <CircularProgress
          size={100}
          color="inherit"
          style={{
            ...styles.loadingIcon,
            ...{
              zIndex: loading ? "10" : "-1",
              opacity: loading ? "1" : "0",
            },
          }}
        />
      </center>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Avatar
          style={{
            position: "relative",
            left: "calc(50% - 44px)",
            top: "-50%",
          }}
        />
        <div style={styles.topText}>
          Welcome to Support <br /> Wizard 🧙‍♂️
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ position: "relative", width: "100%", top: "-22.75%" }}
        >
          <input
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            style={styles.emailInput}
          />
          <div className="mt-4" style={styles.bottomText}>
            Enter your email to get started.
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
