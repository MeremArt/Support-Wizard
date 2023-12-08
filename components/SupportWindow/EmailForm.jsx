"use client";
import React, { useState, useEffect } from "react";
import Avatar from "../Avatar/page";
import { styles } from "../Avatar/styles";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const API_URLS = {
  otherApi: "https://chat-wizard.vercel.app/api/v1/chats/",
};

const EmailForm = (props) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const otherApi = () => {
    const requestBody = {
      adminEmail: email,
      userEmail: email,
    };

    axios
      .put(API_URLS.otherApi, requestBody)
      .then((response) => {
        console.log("PUT request successful:", response.data);

        // Assuming response.data contains the chatId
        const chatId = response.data.chatId;
        const accessKey = response.data.accessKey;
        // Save chatId to localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("chatId", chatId);
          localStorage.setItem("accessKey", accessKey);
          const storedChatId = localStorage.getItem("chatId");
          const storeAccessKey = localStorage.getItem("accessKey");
          if (storedChatId && storeAccessKey) {
            console.log(
              "ChatId successfully stored in localStorage:",
              storedChatId,
              storeAccessKey
            );
          } else {
            console.error("Failed to store chatId in localStorage");
          }
        }

        console.log(email);
        console.log(accessKey);
      })
      .catch((error) => {
        console.error("Error making PUT request:", error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (typeof window !== "undefined") {
      localStorage.setItem("userEmail", email);
      const storedEmail = localStorage.getItem("userEmail");
      if (storedEmail) {
        console.log("Email successfully stored in localStorage:", storedEmail);
      } else {
        console.error("Failed to store email in localStorage");
      }
    }

    // getCreateChat();
    otherApi();
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
            placeholder="Enter your email..."
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
