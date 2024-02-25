import food from "../../assets/images/homeFood.png";
import ChatMessages from "../chatBot/chatMessages";
import { Button } from "../ui/button";
import { ArrowLeftIcon, CameraIcon } from "@heroicons/react/24/outline";
import foodFreezer from "../../assets/images/foodInFreezer.png";
import foodResult from "../../assets/images/foodResult.png";
import DietTable from "../dietsTable/dietsTable";
import Plans from "../Plans";
import { SignedOut, SignedIn, SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Home = () => {
  const jsonExample = {
    Nome: "Marcos",
    Objetivo: "Ganho de massa muscular",
    IngestaoDiaria: {
      Proteina: "200g",
      Carboidratos: "400g",
      Calorias: "3500Kcal",
    },
    Refeicoes: [
      {
        Dia: "Segunda-feira",
        CafeDaManha:
          "4 ovos mexidos com espinafre + 1 xícara de aveia com banana + 200ml de suco de laranja",
        LancheDaManha: "1 maçã + 30g de amêndoas",
        Almoco:
          "200g de peito de frango grelhado + 1 xícara de quinoa + legumes cozidos",
        LancheDaTarde: "1 batata-doce média assada + 150g de peito de peru",
        Jantar:
          "250g de salmão grelhado + 1 xícara de arroz integral + salada de folhas verdes",
        Ceia: "1 copo de leite de amêndoas + 30g de whey protein",
      },
      {
        Dia: "Terça-feira",
        CafeDaManha:
          "2 bananas amassadas com aveia e mel + 4 claras de ovo cozidas + 200ml de suco de uva",
        LancheDaManha: "1 pera + 30g de nozes",
        Almoco:
          "250g de carne vermelha magra grelhada + 1 xícara de arroz branco + brócolis cozidos",
        LancheDaTarde:
          "1 batata-doce média cozida + 150g de peito de frango desfiado",
        Jantar:
          "300g de tilápia assada + 1 xícara de quinoa + salada de tomate e pepino",
        Ceia: "1 copo de iogurte sem lactose + 30g de whey protein",
      },
      {
        Dia: "Quarta-feira",
        CafeDaManha:
          "omelete de 3 ovos com queijo sem lactose e espinafre + 1 xícara de aveia com morangos + 200ml de suco de abacaxi",
        LancheDaManha: "1 maçã + 30g de amêndoas",
        Almoco:
          "200g de peito de frango grelhado + 1 xícara de quinoa + legumes cozidos",
        LancheDaTarde: "1 banana + 30g de castanhas",
        Jantar:
          "250g de salmão grelhado + 1 xícara de arroz integral + salada de folhas verdes",
        Ceia: "1 copo de leite de amêndoas + 30g de whey protein",
      },
      {
        Dia: "Quinta-feira",
        CafeDaManha:
          "2 bananas amassadas com aveia e mel + 4 claras de ovo cozidas + 200ml de suco de uva",
        LancheDaManha: "1 pera + 30g de nozes",
        Almoco:
          "250g de carne vermelha magra grelhada + 1 xícara de arroz branco + brócolis cozidos",
        LancheDaTarde:
          "1 batata-doce média cozida + 150g de peito de frango desfiado",
        Jantar:
          "300g de tilápia assada + 1 xícara de quinoa + salada de tomate e pepino",
        Ceia: "1 copo de iogurte sem lactose + 30g de whey protein",
      },
      {
        Dia: "Sexta-feira",
        CafeDaManha:
          "4 ovos mexidos com espinafre + 1 xícara de aveia com banana + 200ml de suco de laranja",
        LancheDaManha: "1 maçã + 30g de amêndoas",
        Almoco:
          "200g de peito de frango grelhado + 1 xícara de quinoa + legumes cozidos",
        LancheDaTarde: "1 batata-doce média assada + 150g de peito de peru",
        Jantar:
          "250g de salmão grelhado + 1 xícara de arroz integral + salada de folhas verdes",
        Ceia: "1 copo de leite de amêndoas + 30g de whey protein",
      },
      {
        Dia: "Sábado",
        CafeDaManha:
          "omelete de 3 ovos com queijo sem lactose e espinafre + 1 xícara de aveia com morangos + 200ml de suco de abacaxi",
        LancheDaManha: "1 maçã + 30g de amêndoas",
        Almoco:
          "250g de carne vermelha magra grelhada + 1 xícara de arroz branco + brócolis cozidos",
        LancheDaTarde: "1 banana + 30g de castanhas",
        Jantar:
          "300g de tilápia assada + 1 xícara de quinoa + salada de tomate e pepino",
        Ceia: "1 copo de leite de amêndoas + 30g de whey protein",
      },
      {
        Dia: "Domingo",
        CafeDaManha:
          "2 bananas amassadas com aveia e mel + 4 claras de ovo cozidas + 200ml de suco de uva",
        LancheDaManha: "1 pera + 30g de nozes",
        Almoco:
          "250g de carne vermelha magra grelhada + 1 xícara de arroz branco + brócolis cozidos",
        LancheDaTarde:
          "1 batata-doce média cozida + 150g de peito de frango desfiado",
        Jantar:
          "300g de tilápia assada + 1 xícara de quinoa + salada de tomate e pepino",
        Ceia: "1 copo de iogurte sem lactose + 30g de whey protein",
      },
    ],
    InformacoesAdicionais:
      "Certifique-se de beber bastante água ao longo do dia e ajuste as porções conforme a resposta do seu corpo ao longo do tempo. Consulte um nutricionista regularmente para otimizar a dieta.",
  };

  return (
    <>
      <div className="flex flex-col items-center px-4 py-8 gap-4 max-w-7xl mx-auto sm:items-start sm:justify-start sm:py-24 mb-11 md:px-8 md:py-44">
        <div className="flex flex-col items-center sm:flex-row gap-4 sm:justify-between sm:items-start w-full">
          <img
            src={food}
            alt="a food photo"
            className="w-44 sm:order-1 sm:w-4/12 sm:max-w-80 sm:min-w-72 rounded-full shadow-2xl"
          />
          <div className="flex flex-col gap-4 h-full sm:pt-10 sm:max-w-96 md:max-w-xl lg:max-w-2xl">
            <h1 className="text-2xl font-bold font-primary text-center sm:text-start sm:text-4xl lg:text-5xl textPurple">
              Faça sua dieta completa em menos de 2 minutos com o nutri.io!
            </h1>
            <h2 className="text-center text-lg font-light textPurple sm:text-start sm:text-2xl font-primary sm:tracking-wide lg:text-3xl opacity-80">
              Sua dieta, da forma personalizada com a sua cara!
            </h2>
          </div>
        </div>
        <SignedIn>
          <Link to={"/diets"}>
            <Button
              variant={"default"}
              className="w-40 p-5 text-md rounded-lg lg:p-7 lg:text-xl"
            >
              Gerar dieta
            </Button>
          </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button
              variant={"default"}
              className="w-40 p-5 text-md rounded-lg lg:p-7 lg:text-xl"
            >
              Gerar dieta
            </Button>
          </SignInButton>
        </SignedOut>
      </div>

      <div className="px-4 mb-10">
        <h2 className="text-[#525252] font-bold text-base text-center md:text-2xl mb-6 max-w-7xl mx-auto lg:mb-16">
          Junte-se a mais de 1.000 usuários e crie suas dieta personalizadas com
          direito a receitas saborosas - Atinja agora seus objetivos com
          nutri.io !
        </h2>

        <DietTable jsonExample={jsonExample} />
      </div>

      {/* Faltar adicionar sombra nos componentes de chat e dietTable */}

      <div className="bg-opacity-20 min-h-screen w-screen bg bg-custom-green-opacity py-12 px-4">
        <div className="max-w-7xl mx-auto flex items-center md:justify-center md:items-center flex-col">
          <h2 className="font-bold text-base text-center md:text-2xl textPurple opacity-70 ">
            Conte com um chat 24hrs para te auxiliar a diversificar suas
            refeições, tirar dúvidas de nutrição de dietas{" "}
            <span className="hidden md:block">e muito mais...</span>
          </h2>

          <div className="flex flex-col md:gap-36 md:flex-row">
            <div className="border-primary border-[1px] bg-nutriBlue w-72 h-[490px] rounded-lg relative my-8 overflow-hidden lg:w-96 lg:h-[620px]">
              <div className="bg-primary w-full p-2 flex items-center text-white">
                {" "}
                <ArrowLeftIcon className="text-white w-4 lg:w-6" />{" "}
                <h4 className="w-full flex justify-center pr-4 text-sm lg:text-lg">
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
                  messageBaloon="Hoje, quero variar minha dieta. Sugere uma refeição com esses ingredientes alinhada aos objetivos da minha dieta atual? Segue a imagem dos ingredientes da minha geladeira: "
                  role="user"
                />
              </div>
              <div className="absolute bottom-0 w-full px-2 py-3 flex items-center justify-between lg:px-4">
                <input
                  className="bg-white h-11 w-9/12 border-[1px] border-primary rounded-xl text-[9px] pb-4 pl-1 lg:h-16 lg:text-sm lg:pb-6"
                  disabled={true}
                  placeholder="Digite aqui..."
                />
                <Button
                  size={"sm"}
                  className="rounded-2xl pointer-events-none h-6 text-[10px] lg:p-4 lg:text-base"
                >
                  enviar
                </Button>
                <CameraIcon className="absolute top-[18px] right-[85px] w-4 text-[#5A6D77] lg:top-[20px] lg:right-[110px] lg:w-5" />
              </div>
            </div>

            <h2 className="text-[#525252] font-bold text-base text-center md:hidden">
              e muito mais...
            </h2>

            <div className="border-primary border-[1px] bg-nutriBlue w-72 h-[720px] rounded-lg relative my-8 overflow-hidden lg:w-96 lg:h-[940px]">
              <div className="bg-primary w-full p-2 flex items-center text-white">
                {" "}
                <ArrowLeftIcon className="text-white w-4 lg:w-6" />{" "}
                <h4 className="w-full flex justify-center pr-4 text-sm lg:text-lg">
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
              <div className="absolute bottom-0 w-full px-2 py-3 flex items-center justify-between lg:px-4">
                <input
                  className="bg-white h-11 w-9/12 border-[1px] border-primary rounded-xl text-[9px] pb-4 pl-1 lg:h-16 lg:text-sm lg:pb-6"
                  disabled={true}
                  placeholder="Digite aqui..."
                />
                <Button
                  size={"sm"}
                  className="rounded-2xl pointer-events-none h-6 text-[10px] lg:p-4 lg:text-base"
                >
                  enviar
                </Button>
                <CameraIcon className="absolute top-[18px] right-[85px] w-4 text-[#5A6D77] lg:top-[20px] lg:right-[110px] lg:w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-7xl mx-auto text-center sm:text-start px-4 sm:px-12">
        <h2 className="font-primary text-3xl textPurple font-bold">
          Planos e Preços
        </h2>
        <p className="font-primary textPurple opacity-70">
          Veja agora os melhores planos para o seu objetivo !
        </p>
      </div>

      <Plans />
    </>
  );
};

export default Home;
