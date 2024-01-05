import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ClerkProvider, SignIn, SignUp } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Diets from "./components/DietsPage/Diets.tsx";

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
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/diets" element={<Diets />} />
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl={"/"} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp redirectUrl={"/"} routing="path" path="/sign-up" />}
        />
      </Routes>
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
