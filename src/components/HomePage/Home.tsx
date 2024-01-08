import food from "../../assets/images/homeFood.png";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <>
    <div className="flex flex-col items-center px-4 py-8 gap-4 max-w-6xl mx-auto sm:items-start sm:justify-start">
      <div className="flex flex-col items-center sm:flex-row gap-4 sm:justify-between sm:items-start w-full">
        <img src={food} alt="a food photo" className="w-44 sm:order-1 sm:w-4/12 sm:max-w-80 sm:min-w-72" />
        <div className="flex flex-col gap-4 h-full sm:pt-10 sm:max-w-96 md:max-w-xl lg:max-w-2xl">
          <h1 className="text-2xl font-bold font-primary text-center sm:text-start sm:text-4xl lg:text-5xl ">
            Faça sua dieta completa em menos de 2 minutos com o nutri.io!
          </h1>
          <h2 className="text-center text-lg font-light text-muted-foreground sm:text-start sm:text-2xl font-primary sm:tracking-wide lg:text-3xl">
            Sua dieta, da forma personalizada com a sua cara!
          </h2>
        </div>
      </div>
      <Button variant={"default"} className="w-40 p-5 text-md">
        Gerar dieta
      </Button>
    </div>
    </>
    
  );
};

export default Home;
