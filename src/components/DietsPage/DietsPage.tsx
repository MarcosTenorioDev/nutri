import { SignedIn, SignedOut } from "@clerk/clerk-react";
import AllDiets from "./AllDiets";
import { useGlobalContext } from "@/context/userContext";
import { useState, useEffect } from "react";
import Plans from "../Plans";

const DietsPage = () => {
  const { userIsPaid } = useGlobalContext();
  const [userPaymentStatus, setUserPaymentStatus] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userIsPaid().then((isPaid: any) => {
      setUserPaymentStatus(isPaid);
      setLoading(false)
    });
  }, [userIsPaid]);

  return (
    <>
      {/* implementar loading da página */}
      <SignedIn>
        {loading ? (
          <div className="h-screen w-screen flex items-center justify-center flex-col">
            {" "}
            <svg
              className="mr-3 h-24 w-24 animate-spin textPurple"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <h2 className="font-primary textPurple opacity-70 text-2xl mr-3 mt-4">
              loading
            </h2>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4">
            {userPaymentStatus ? (
              <div className="mb-16 mt-8">
                <h1 className="font-primary text-3xl textPurple font-bold mb-2">
                  Vejas e edite suas dietas
                </h1>
                <h2 className="font-primary textPurple opacity-70">
                  Aqui você pode criar, visualizar e editar suas dietas
                  personalizadas. Mantenha-se saudável e em forma com nossas
                  opções nutritivas!{" "}
                </h2>
              </div>
            ) : (
              <></>
            )}

            {userPaymentStatus ? (
              <AllDiets />
            ) : (
              <>
                <div className="px-4 sm:px-12 mt-8">
                  <h2 className="font-primary text-2xl sm:text-3xl textPurple font-bold mb-2">
                    Oops... parece que você ainda não aderiu a um dos nossos
                    planos, escolha o que mais se adequa a seu objetivo.
                  </h2>
                </div>

                <Plans />
              </>
            )}
          </div>
        )}
      </SignedIn>
      <SignedOut>voce precisa logar para ver suas dietas</SignedOut>
    </>
  );
};

export default DietsPage;
