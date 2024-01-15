import { Key, useState } from "react";
import { TableHeadCell, TableBodyCell } from "./TableCells";
import { XMarkIcon, TableCellsIcon, DocumentIcon } from "@heroicons/react/24/solid";
import { Button } from "../ui/button";

const DietTable = (props: any) => {

  const text = `Olá, -span-, Aqui está sua dieta com objetivo em ganho de massa muscular. espero que goste!`;

  const [dietData] = useState(props.jsonExample || undefined);

  return (
    <div className="border-[2px] border-primary rounded-2xl max-w-7xl mx-auto px-4 bg-white py-5">
      <header className="flex justify-between items-center border[#7A7A7A] border-b-2 mb-3 px-5 pb-5">
        <h2 className="text-primary text-xl font-secondary font-normal tracking-wider sm:text-2xl lg:text-3xl">
          NUTRI.IO
        </h2>
        <Button variant={"ghost"} className="hover:bg-transparent p-0 m-0" disabled={true}>
          <XMarkIcon className="w-12 text-red-500" />
        </Button>
      </header>
      <div className="mb-4">
        <h3 className="font-secondary text-sm text-center sm:text-base md:text-lg">
          {text.replace("-span-", `${dietData.Nome}`)}
        </h3>
      </div>
      <div className="border-2 border-primary overflow-scroll max-h-72 mx-auto md:max-h-max xl:border-0 xl:max-w-[95%]">
        <table className="border-4 border-primary bg-white w-10/12 md:w-full">
          <thead className="bg-primary text-white customThead">
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
            {dietData.Refeicoes.map((refeicao: { Dia: any; CafeDaManha: any; LancheDaManha: any; Almoco: any; LancheDaTarde: any; Jantar: any; Ceia: any; }, index: Key | null | undefined) => {
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
      <div className="py-2 sm:flex sm:justify-between sm:px-6">
        <div className="text-center mb-3 sm:text-start">
          <h3 className="font-secondary text-md py-3 font-semibold md:text-lg lg:text-xl">
            Essa dieta contém aproximadamente:
          </h3>
          <ul className="font-base text-sm md:text-base">
            <li>Calorias diárias: {dietData.IngestaoDiaria.Calorias}</li>
            <li>Proteinas diárias: {dietData.IngestaoDiaria.Proteina}</li>
            <li>
              Carboidratos diárias: {dietData.IngestaoDiaria.Carboidratos}
            </li>
          </ul>
        </div>
        <div className="text-center sm:text-start">
          <h3 className="font-secondary text-md py-3 font-semibold mb-3 border-t-2 sm:border-t-0 md:text-lg lg:text-xl">
            Faça download da dieta:{" "}
          </h3>
          <div className="flex justify-center gap-4">
            <Button className="flex gap-2 text-md">PDF <DocumentIcon className="w-6"/></Button>
            <Button className="flex gap-2 text-md">CSV <TableCellsIcon className="w-6"/></Button>
          </div>
        </div>
      </div>
      <div className="text-center border-y-2 py-2 my-4 sm:border-y-0 sm:border-b-2 sm:my-0 sm:mb-4">
        <h4 className="sm:border-b-2 sm:pb-2 text-muted-foreground md:text-md">Sugestão :</h4>
        <div className=" ">      
            <p className="font-secondary text-xs py-3 font-bold md:text-base">{dietData.InformacoesAdicionais}</p>
        </div>
      </div>
      <h5 className="text-center font-secondary text-sm text-muted-foreground font-bold lg:text-base">Copyright @ nutri.io 2023</h5>
    </div>
  );
};

export default DietTable;
