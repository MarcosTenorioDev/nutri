import { Button } from "../ui/button";
import nutriProfile from "../../assets/images/nutriProfile.svg";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const Success = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-[#3C946D] w-screen h-screen flex flex-col items-center justify-center gap-5 lg:w-5/12 min-w-[41.66%]">
        <img src={nutriProfile} alt="nutri profile logo" className="w-36" />
        <h1 className="font-secondary text-white text-xl font-normal md:text-2xl">
          NUTRI.IO
        </h1>
        <div className="bg-white bg-opacity-85 w-9/12 text-center p-4 rounded-md shadow-md shadow-slate-700 max-w-[550px]">
          <h2 className="font-primary">
            Obrigado por escolher nosso plano de nutrição. <br></br>Aproveite os
            seus benefícios liberados!
          </h2>
        </div>
        <SignedIn>
        <Link to="/diets">
          <Button
            variant={"outline"}
            className="text-white bg-[#00160C] bg-opacity-30 font-primary"
          >
            Voltar para minhas dietas
          </Button>
        </Link>
        </SignedIn>
        <SignedOut>
        <Link to="/">
          <Button
            variant={"outline"}
            className="text-white bg-[#00160C] bg-opacity-30 font-primary"
          >
            Voltar para minhas dietas
          </Button>
        </Link>
        </SignedOut>
        
      </div>
      <div className="hidden lg:block w-full h-screen bg-[url('./assets/images/successPageImg.svg')] bg-cover"></div>
    </div>
  );
};

export default Success;
