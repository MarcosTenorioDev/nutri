import { SignedIn, SignedOut } from "@clerk/clerk-react";
const Diets = () => {
  return (
    <>
      <SignedIn>
        <h1>minhas dietas</h1>

      </SignedIn>
      <SignedOut>voce precisa logar para ver suas dietas</SignedOut>
    </>
  );
};

export default Diets;
