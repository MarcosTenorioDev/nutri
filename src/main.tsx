import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, useNavigate } from "react-router-dom";

const clerkPubKey = "pk_test_ZGFzaGluZy1za3Vuay0xOS5jbGVyay5hY2NvdW50cy5kZXYk";
if (!clerkPubKey) {
  throw new Error("Missing Publishable Key");
}
const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to: any) => navigate(to)}
    >
      <App/>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
