import {
  SignedOut,
  SignedIn,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-primary w-screen flex flex-col justify-start items-center p-3 h-screen sm:items-center sm:h-auto">
      <Link
        to={"/"}
        className="font-secondary text-white text-xl font-light mb-14"
      >
        NUTRI.IO
      </Link>
      <div className="h-screen w-full flex justify-center sm:h-auto">
        <div className="flex flex-col items-center justify-between max-w-6xl w-full sm:flex">
          <SignedIn>
            <div className="flex flex-col w-full gap-12">
              <div className="flex flex-col justify-center items-center w-full gap-8 ">
                <Link
                  to={"/"}
                  className="text-white w-full flex justify-center"
                >
                  <Button variant={"outline"} className="w-10/12">
                    Home
                  </Button>
                </Link>
                <Link
                  to={"/diets"}
                  className="text-white w-full flex justify-center"
                >
                  <Button variant={"outline"} className="w-10/12">
                    Minhas dietas
                  </Button>
                </Link>
                <Button
                  disabled={true}
                  variant={"outline"}
                  className="w-10/12 flex justify-center text-white "
                >
                  <Link to={"/"} className="w-10/12">
                    Minhas receitas
                  </Link>
                </Button>
              </div>
              <div className="flex w-full justify-center -order-1">
                <div className="border-2 rounded-full w-fit ">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <div className="h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary shadow-sm hover:bg-secondary/80 text-primary">
              <SignInButton mode="modal">Login</SignInButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
