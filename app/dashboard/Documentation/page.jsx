"use client";
import React, { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/Layout";
import copy from "clipboard-copy";
import axios from "axios";

const Page = () => {
  const [scriptData, setScriptData] = useState(null);
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");

    if (storedEmail) {
      setEmail(storedEmail);
      console.log("Email set from local storage:", storedEmail);
    }

    // Clear the email from local storage once retrieved
    localStorage.removeItem("email");
  }, []);

  const generateScript = async () => {
    try {
      const response = await axios.get(
        "https://chat-wizard.vercel.app/api/v1/chats/script-tag",
        {
          params: {
            adminEmail: { email },
          },
        }
      );

      setScriptData(response.data);
    } catch (error) {
      console.error("Error fetching script:", error);
    }
  };

  const handleCopy = () => {
    copy(scriptData.scriptTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <DashboardLayout>
      <div className="p-6 border rounded-md shadow-md">
        <button
          className="bg-wizard text-white px-4 py-2 rounded-md"
          onClick={generateScript}
        >
          Get Script
        </button>

        {scriptData && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Generated Script:</h3>
            <code className="block bg-black text-white p-4 rounded-md">
              {scriptData.scriptTag}
            </code>
            <button
              className={`mt-2 px-4 py-2 rounded-md ${
                copied ? "bg-green-500 text-white" : "bg-wizard text-white"
              }`}
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Page;
