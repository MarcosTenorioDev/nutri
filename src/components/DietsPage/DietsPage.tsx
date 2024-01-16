import { SignedIn, SignedOut } from "@clerk/clerk-react";
import AllDiets from "./AllDiets";
const DietsPage = () => {
  return (
    <>
      <SignedIn>
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="mb-16 mt-8">
          <h1 className="font-primary text-3xl textPurple font-bold mb-2">
            Vejas e edite suas dietas
          </h1>
          <h2 className="font-primary textPurple opacity-70">
            Whether your time-saving automation needs are large or small, were
            here to help you scale.
          </h2>
          </div>
          

          <AllDiets />
        </div>
      </SignedIn>
      <SignedOut>voce precisa logar para ver suas dietas</SignedOut>
    </>
  );
};

export default DietsPage;
