import food from "../../assets/images/homeFood.png";
import ChatMessages from "../chatBot/chatMessages";
import { Button } from "../ui/button";
import { ArrowLeftIcon, CameraIcon } from "@heroicons/react/24/outline";
import foodFreezer from "../../assets/images/foodInFreezer.png";
import foodResult from "../../assets/images/foodResult.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center px-4 py-8 gap-4 max-w-7xl mx-auto sm:items-start sm:justify-start sm:py-24 mb-11">
        <div className="flex flex-col items-center sm:flex-row gap-4 sm:justify-between sm:items-start w-full">
          <img
            src={food}
            alt="a food photo"
            className="w-44 sm:order-1 sm:w-4/12 sm:max-w-80 sm:min-w-72 rounded-full shadow-2xl"
          />
          <div className="flex flex-col gap-4 h-full sm:pt-10 sm:max-w-96 md:max-w-xl lg:max-w-2xl">
            <h1 className="text-2xl font-bold font-primary text-center sm:text-start sm:text-4xl lg:text-5xl">
              Faça sua dieta completa em menos de 2 minutos com o nutri.io!
            </h1>
            <h2 className="text-center text-lg font-light text-muted-foreground sm:text-start sm:text-2xl font-primary sm:tracking-wide lg:text-3xl">
              Sua dieta, da forma personalizada com a sua cara!
            </h2>
          </div>
        </div>
        <Button variant={"default"} className="w-40 p-5 text-md rounded-lg">
          Gerar dieta
        </Button>
      </div>

      <div className="bg-opacity-20 min-h-screen w-screen bg bg-custom-green-opacity py-12 px-4">
        <div className="max-w-7xl mx-auto flex items-center md:justify-center md:items-center flex-col">
          <h2 className="text-[#525252] font-bold text-base text-center">
            Conte com um chat 24hrs para te auxiliar a diversificar suas
            refeições, tirar dúvidas de nutrição de dietas{" "}
            <span className="hidden md:block">e muito mais...</span>
          </h2>

          <div className="flex flex-col md:gap-36 md:flex-row">
            <div className="border-primary border-[1px] bg-nutriBlue w-72 h-[490px] rounded-lg relative my-8 overflow-hidden">
              <div className="bg-primary w-full p-2 flex items-center text-white">
                {" "}
                <ArrowLeftIcon className="text-white w-4" />{" "}
                <h4 className="w-full flex justify-center pr-4 text-sm">
                  nutri.helper
                </h4>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <ChatMessages
                  messageBaloon="Olá, sou o nutri.helper! a IA que vai tirar todas as suas dúvidas em relação a sua alimentação!"
                  role="system"
                />
                <ChatMessages
                  foodChat={foodFreezer}
                  messageBaloon="Hoje, quero variar minha dieta. Sugere uma refeição com esses ingredientes alinhada aos objetivos da minha dieta atual? Segue a imagem dos ingredientes da minha geladeira :"
                  role="user"
                />
              </div>
              <div className="absolute bottom-0 w-full px-2 py-3 flex items-center justify-between">
                <input
                  className="bg-white h-11 w-9/12 border-[1px] border-primary rounded-xl text-[9px] pb-4 pl-1"
                  disabled={true}
                  placeholder="Digite aqui..."
                />
                <Button
                  size={"sm"}
                  className="rounded-2xl pointer-events-none h-6 text-[10px]"
                >
                  enviar
                </Button>
                <CameraIcon className="absolute top-[18px] right-[85px] w-4 text-[#5A6D77]" />
              </div>
            </div>
            <h2 className="text-[#525252] font-bold text-base text-center md:hidden">
              e muito mais...
            </h2>
            <div className="border-primary border-[1px] bg-nutriBlue w-72 h-[720px] rounded-lg relative my-8 overflow-hidden">
              <div className="bg-primary w-full p-2 flex items-center text-white">
                {" "}
                <ArrowLeftIcon className="text-white w-4" />{" "}
                <h4 className="w-full flex justify-center pr-4 text-sm">
                  nutri.helper
                </h4>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <ChatMessages
                  foodChat={foodResult}
                  messageBaloon={`Claro! ficarei feliz em ajudar a criar uma refeição variada com os ingredientes indentificados ! \n Entrada: Salada de folhas verdes com cenouras, tomates e pepinos. \n Prato principal: Frango grelhado (200g) com arroz integral (1 xícara) e legumes assados (1 xícara). \nSobremesa: 2 unidades de Fruta fresca (por exemplo, banana, maçã ou manga).  \n Total: \nCarboidratos: 105 gramas Proteínas: 41 gramas Calorias: 550`}
                  role="system"
                />
              </div>
              <div className="absolute bottom-0 w-full px-2 py-3 flex items-center justify-between">
                <input
                  className="bg-white h-11 w-9/12 border-[1px] border-primary rounded-xl text-[9px] pb-4 pl-1"
                  disabled={true}
                  placeholder="Digite aqui..."
                />
                <Button
                  size={"sm"}
                  className="rounded-2xl pointer-events-none h-6 text-[10px]"
                >
                  enviar
                </Button>
                <CameraIcon className="absolute top-[18px] right-[85px] w-4 text-[#5A6D77]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
