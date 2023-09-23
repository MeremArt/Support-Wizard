"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

// Create a new context
const Context = React.createContext({});

export function DashboardProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = useCallback(() => {
    setSidebarOpen((prevState) => !prevState);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      const handleRouteChange = () => {
        closeSidebar();
      };

      // Check if `router.events` is defined before using it
      if (router.events) {
        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
          router.events.off("routeChangeStart", handleRouteChange);
        };
      }
    }
  }, [sidebarOpen, closeSidebar, router]);

  return (
    <Context.Provider value={{ sidebarOpen, toggleSidebar, closeSidebar }}>
      {children}
    </Context.Provider>
  );
}

// Custom hook to consume all context values { sidebarOpen, toggleSidebar, closeSidebar }
export function useDashboardContext() {
  return React.useContext(Context);
}
