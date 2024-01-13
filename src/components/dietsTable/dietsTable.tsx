import { useState } from "react";
import { TableHeadCell, TableBodyCell } from "./TableCells";
import { XMarkIcon, TableCellsIcon, DocumentIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

const DietTable = () => {
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
  const text = `Olá, -span-, Aqui está sua dieta com objetivo em ganho de massa muscular. espero que goste!`;

  const [dietData] = useState(jsonExample);

  return (
    <div className="border-[2px] border-primary rounded-2xl max-w-7xl mx-auto px-4 bg-white py-5">
      <header className="flex justify-between items-center border[#7A7A7A] border-b-2 mb-3 px-5 pb-5">
        <h2 className="text-primary text-xl font-secondary font-normal tracking-wider">
          NUTRI.IO
        </h2>
        <Button variant={"ghost"} className="hover:bg-transparent p-0 m-0">
          <XMarkIcon className="w-12 text-red-500" />
        </Button>
      </header>
      <div className="mb-4">
        <h3 className="font-secondary text-sm text-center">
          {text.replace("-span-", `${dietData.Nome}`)}
        </h3>
      </div>
      <div className="border-4 overflow-scroll max-h-72">
        <table className="border-4 border-primary bg-white w-10/12">
          <thead className="bg-primary text-white">
            <tr>
              <TableHeadCell>Dia</TableHeadCell>
              <TableHeadCell>Café da manhã</TableHeadCell>
              <TableHeadCell>Lanche da manhã</TableHeadCell>
              <TableHeadCell>Almoço</TableHeadCell>
              <TableHeadCell>Lanche da tarde</TableHeadCell>
              <TableHeadCell>Jantar</TableHeadCell>
              <TableHeadCell>Ceia</TableHeadCell>
            </tr>
          </thead>
          <tbody>
            {dietData.Refeicoes.map((refeicao, index) => {
              return (
                <tr key={index}>
                  <TableBodyCell className="font-semibold min-w-auto">
                    {refeicao.Dia}
                  </TableBodyCell>
                  <TableBodyCell>{refeicao.CafeDaManha}</TableBodyCell>
                  <TableBodyCell>{refeicao.LancheDaManha}</TableBodyCell>
                  <TableBodyCell>{refeicao.Almoco}</TableBodyCell>
                  <TableBodyCell>{refeicao.LancheDaTarde}</TableBodyCell>
                  <TableBodyCell>{refeicao.Jantar}</TableBodyCell>
                  <TableBodyCell>{refeicao.Ceia}</TableBodyCell>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="py-2">
        <div className="text-center mb-3">
          <h3 className="font-secondary text-md py-3 font-semibold">
            Essa dieta contém aproximadamente:
          </h3>
          <ul className="font-base text-sm">
            <li>Calorias diárias: {dietData.IngestaoDiaria.Calorias}</li>
            <li>Proteinas diárias: {dietData.IngestaoDiaria.Proteina}</li>
            <li>
              Carboidratos diárias: {dietData.IngestaoDiaria.Carboidratos}
            </li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="font-secondary text-md py-3 font-semibold mb-3 border-t-2">
            Faça download da dieta:{" "}
          </h3>
          <div className="flex justify-center gap-4">
            <Button className="flex gap-2 text-md">PDF <DocumentIcon className="w-6"/></Button>
            <Button className="flex gap-2 text-md">CSV <TableCellsIcon className="w-6"/></Button>
          </div>
        </div>
      </div>
      <div className="text-center border-y-2 py-2 my-2">
        <h4>Sugestão :</h4>
        <div className=" ">      
            <p className="font-secondary text-xs py-3 font-bold">{dietData.InformacoesAdicionais}</p>
        </div>
      </div>
      <h5 className="text-center font-secondary text-sm text-muted-foreground font-bold">Copyright @ nutri.io 2023</h5>
    </div>
  );
};

export default DietTable;
