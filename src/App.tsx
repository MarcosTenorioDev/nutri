import { SignIn, SignUp } from "@clerk/clerk-react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/HomePage/Home";
import DietsPage from "./components/DietsPage/DietsPage";

function App() {




  return (
    <div className="bg-nutriBlue min-h-screen">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diets" element={<DietsPage />} />
        <Route
          path="/sign-in/*"
          element={<SignIn redirectUrl={"/"} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp redirectUrl={"/"} routing="path" path="/sign-up" />}
        />
      </Routes>
    </div>
  );
}

export default App;
