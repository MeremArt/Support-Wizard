"use client";
import React, { useState } from "react";
import Avatar from "../Avatar/page";
import { styles } from "../Avatar/styles";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
const EmailForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(``);
  function getOrCreateUser(callback) {
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username: email, secret: email },
        {
          headers: {
            "Private-Key": "4321c0af-9ff1-4316-9048-bcadac3bd9c8",
            "Content-Type": "application/json",
            Vary: "Accept, Origin",
            Allow: "GET, POST, PUT, HEAD, OPTIONS",
            "X-Frame-Options": "DENY",
            // "Content-Length": "279",
            // "X-Content-Type-Options": "nosniff",
            "Referrer-Policy": "same-origin",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
          mode: "cors", // Added CORS mode
          credentials: true, // Do not include credentials
        }
      )
      .then((response) => callback(response.data))
      .catch((error) => console.log("Get or create user error", error));
  }

  const getCreateChat = () => {
    const url = "https://api.chatengine.io/chats/";
    const headers = {
      "Project-ID": "0771af89-3ef1-486c-bc2d-8fc17abb0d33",
      "User-Name": email,
      "User-Secret": "{{user_secret}}",
      "Content-Type": "application/json",
      Vary: "Accept, Origin",
      Allow: "GET, POST, PUT, HEAD, OPTIONS",

      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "X-Cloud-Trace-Context": "356f99312aac3a16d462aed40bced7fa",
    };
    const data = {
      usernames: ["Ugofranklin22@gmail.com", email],
      title: "Support",
      is_direct_chat: false,
    };

    axios
      .put(url, data, {
        headers,
        mode: "cors", // Added CORS mode
        credentials: true, // Do not include credentials
      })
      .then((response) => {
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Check if window is defined to ensure it's running in the browser
    if (typeof window !== "undefined") {
      localStorage.setItem("userEmail", email);
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        console.log("Email successfully stored in localStorage:", storedEmail);

        // Call getOrCreateUser function
        getOrCreateUser((userData) => {
          console.log("Response from getOrCreateUser:", userData);
          // Further processing or state updates based on the response can be done here
        });
      } else {
        console.error("Failed to store email in localStorage");
      }
    }

    // Call getCreateChat function
    getCreateChat();

    props.handleEmailSubmit?.(email);
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
