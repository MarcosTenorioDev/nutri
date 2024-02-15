import food from "../../assets/images/homeFood.png";
import ChatMessages from "../chatBot/chatMessages";
import { Button } from "../ui/button";
import { ArrowLeftIcon, CameraIcon } from "@heroicons/react/24/outline";
import foodFreezer from "../../assets/images/foodInFreezer.png";
import foodResult from "../../assets/images/foodResult.png";
import DietTable from "../dietsTable/dietsTable";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

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
        <Button
          variant={"default"}
          className="w-40 p-5 text-md rounded-lg lg:p-7 lg:text-xl"
        >
          Gerar dieta
        </Button>
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

      <div className="py-10 max-w-7xl mx-auto text-center sm:text-start px-4 sm:px-12">
        <h2 className="font-primary text-3xl textPurple font-bold">
          Planos e Preços
        </h2>
        <p className="font-primary textPurple opacity-70">
          Veja agora os melhores planos para o seu objetivo !
        </p>

        <section className="h-full w-full bg-gray-500 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 shadow-lg mt-8">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
              <div className="flex flex-col p-6 mx-auto max-w-sm text-center textPurple bg-white rounded-2xl border-primary border shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <h3 className="mb-4 text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold">
                  Plano básico
                </h3>
                <p className="font-light text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg textPurple opacity-50 dark:text-gray-400">
                  Para você que apenas quer fazer dietas personalizadas.
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-4xl sm:text-5xl font-extrabold">
                    R$15
                  </span>
                  <span className="text-sm sm:text-base textPurple opacity-50">
                    Pagamento único
                  </span>
                </div>
                <ul role="list" className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="min-w-6 max-w-6 text-primary" />
                    <span className="text-sm sm:text-base">
                      Crie até 10 dietas
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircleIcon className="min-w-6 max-w-6 text-primary" />
                    <span className="text-sm sm:text-base">
                      Dietas baseadas em paramêtros complexos e individuais
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <XCircleIcon className="min-w-6 max-w-6 text-red-500" />
                    <span className="text-sm sm:text-base">
                      Chatbot especializado 24hrs para tirar todas as suas
                      dúvidas
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <XCircleIcon className="min-w-6 max-w-6 text-red-500" />
                    <span className="text-sm sm:text-base">
                      Recomendações de receitas diversas para suas dietas sem
                      afetar o ganho calórico.
                    </span>
                  </li>
                </ul>
                <div className="w-full">
                  <Button
                    variant={"default"}
                    className="w-44 shadow-lg text-sm sm:text-md"
                  >
                    Vamos lá!
                  </Button>
                </div>
              </div>

              <div className="flex flex-col p-6 mx-auto max-w-sm text-center textPurple bg-white rounded-2xl border-primary border shadow-lg dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
    <div className="w-full text-center mb-4">
        <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold">Plano avançado</h3>
    </div>
    <p className="font-light text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg textPurple opacity-50 dark:text-gray-400">
        A melhor opção para você que quer um serviço completo.
    </p>
    <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-4xl sm:text-5xl font-extrabold">R$35</span>
        <span className="text-sm sm:text-base textPurple opacity-50">Pagamento único</span>
    </div>
    <ul role="list" className="mb-8 space-y-4 text-left">
        <li className="flex items-center space-x-3">
            <CheckCircleIcon className="min-w-6 max-w-6 text-primary" />
            <span className="text-sm sm:text-base">Crie até 10 dietas</span>
        </li>
        <li className="flex items-center space-x-3">
            <CheckCircleIcon className="min-w-6 max-w-6 text-primary" />
            <span className="text-sm sm:text-base">Dietas baseadas em paramêtros complexos e individuais</span>
        </li>
        <li className="flex items-center space-x-3">
            <CheckCircleIcon className="min-w-6 max-w-6 text-primary" />
            <span className="text-sm sm:text-base">Chatbot especializado 24hrs para tirar todas as suas dúvidas</span>
        </li>
        <li className="flex items-center space-x-3">
            <CheckCircleIcon className="min-w-6 max-w-6 text-primary" />
            <span className="text-sm sm:text-base">Recomendações de receitas diversas para suas dietas sem afetar o ganho calórico.</span>
        </li>
    </ul>
    <div className="w-full">
        <Button variant={"default"} disabled={true} className="w-44 shadow-lg text-sm sm:text-md">Em breve...</Button>
    </div>
</div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
