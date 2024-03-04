import { SignIn, SignUp } from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/HomePage/Home";
import DietsPage from "./components/DietsPage/DietsPage";
import "@stripe/stripe-js";
import Success from "./components/successPage/Success";
function App() {
  return (
    <div className="bg-nutriBlue min-h-screen">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Home />
            </>
          }
        />
        <Route
          path="/diets"
          element={
            <>
              <NavBar />
              <DietsPage />
            </>
          }
        />
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl={"/"} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp redirectUrl={"/"} routing="path" path="/sign-up" />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
