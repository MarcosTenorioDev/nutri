import { SignedIn, SignedOut } from "@clerk/clerk-react";
import AllDiets from "./AllDiets";
const DietsPage = () => {
  return (
    <>
      <SignedIn>
        <div className="max-w-7xl mx-auto border-4">
          <h1 className="font-primary text-3xl textPurple font-bold">
            Planos e Preços
          </h1>
          <h2>
            Whether your time-saving automation needs are large or small, were
            here to help you scale.
          </h2>

          <AllDiets />
        </div>
      </SignedIn>
      <SignedOut>voce precisa logar para ver suas dietas</SignedOut>
    </>
  );
};

export default DietsPage;
