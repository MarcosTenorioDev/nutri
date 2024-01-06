import {
  SignedOut,
  SignedIn,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  console.log(navOpen)

  return (
    <>
      <SignedIn>
        <div className={`bg-primary w-screen flex flex-col justify-start items-center p-3 sm:items-center sm:h-auto overflow-auto ${navOpen ? 'h-screen': ''}`}>
          <div className="flex justify-between items-center w-full px-4">
            <Link
            to={"/"}
            className="font-secondary text-white text-xl font-normal"
          >
            NUTRI.IO
          </Link>
          <Hamburger color="white" rounded={true} onToggle={() => {setNavOpen(!navOpen)}}/>
          </div>
          
          <div className={`h-screen w-full flex justify-center sm:h-auto mt-6  ${navOpen ? '': 'hidden'}`}>
            <div className="flex flex-col items-center justify-between max-w-6xl w-full sm:flex">
              <div className="flex flex-col w-full gap-12">
                <div className="flex flex-col justify-center items-center w-full gap-8 ">
                  <Link
                    to={"/"}
                    className="text-white w-full flex justify-center"
                  >
                    <Button variant={"outline"} className="w-10/12" onClick={() => setNavOpen(false)}>
                      Home
                    </Button>
                  </Link>
                  <Link
                    to={"/diets"}
                    className="text-white w-full flex justify-center"
                  >
                    <Button variant={"outline"} className="w-10/12" onClick={() => setNavOpen(false)}> 
                      Minhas dietas
                    </Button>
                  </Link>
                  <Button
                    disabled={true}
                    variant={"outline"}
                    className="w-10/12 flex justify-center text-white "
                  >
                    <Link to={"/"} className="w-10/12">
                      Minhas dietas
                    </Link>
                  </Button>
                </div>
                <div className="flex w-full justify-center -order-1">
                  <div className="border-2 rounded-full w-fit ">
                    <UserButton afterSignOutUrl="/"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </SignedIn>
      <SignedOut>
        <div className="bg-primary w-screen flex justify-between items-center p-3">
          <Link
            to={"/"}
            className="font-secondary text-white text-xl font-light"
          >
            NUTRI.IO
          </Link>
          <div className="flex gap-4">
            <div className="h-9 px-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary shadow-sm hover:bg-secondary/80 text-primary">
              <SignInButton mode="modal">Login</SignInButton>
            </div>
            <div className="h-9 px-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary shadow-sm hover:bg-secondary/80 text-primary">
              <SignUpButton mode="modal">Register</SignUpButton>
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default NavBar;
