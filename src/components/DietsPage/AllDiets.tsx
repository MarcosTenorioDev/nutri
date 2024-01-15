import { TableHeadCell } from "../dietsTable/TableCells";
import { Button } from "../ui/button";
import { PlusIcon } from "@heroicons/react/24/solid";

interface tableAllDiets {
  id: string;
  name: string;
  dailyKcal: number;
  dailyProtein: number;
  dailyCarb: number;
  objective: string;
}

const AllDiets = () => {
  const dietData : tableAllDiets[] = [
    {
      id: "11232384234",
      name: "Marcos hipertrofia",
      dailyKcal: 3000,
      dailyProtein: 180,
      dailyCarb: 300,
      objective: "ganho de massa",
    },
    {
      id: "1121231234453234234",
      name: "Marcos corrida",
      dailyKcal: 3300,
      dailyProtein: 200,
      dailyCarb: 300,
      objective: "ganho de massa",
    },
    {
      id: "1112323212334234",
      name: "Marcos rawMeat",
      dailyKcal: 2900,
      dailyProtein: 200,
      dailyCarb: 250,
      objective: "ganho de massa",
    },
    {
      id: "11652323234234",
      name: "Marcos emagrecimento",
      dailyKcal: 2200,
      dailyProtein: 140,
      dailyCarb: 230,
      objective: "ganho de massa",
    },
  ];
  return (
    <div className="w-full border-[1px] max-w-6xl mx-auto bg-white p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-primary">minhas dietas</h2>
        <Button variant={"default"} className="flex items-center gap-2 text-sm">
          Nova dieta <PlusIcon className="w-5" />
        </Button>
      </div>
      <div className="overflow-auto">
        <table className="mx-auto w-full flex flex-col gap-10">
          <thead>
            <tr className="text-xs [&>*]:min-w-32 [&>*]:p-4 [&>*]:w-44 [&>*]:font-primary [&>*]:textPurple opacity-50 w-full flex justify-between items-center">
              <TableHeadCell className="rounded-l-xl">Nome</TableHeadCell>
              <TableHeadCell>Kcal diárias</TableHeadCell>
              <TableHeadCell>Proteínas diárias</TableHeadCell>
              <TableHeadCell>Carboidratos diários</TableHeadCell>
              <TableHeadCell>Objetivo</TableHeadCell>
              <TableHeadCell className="rounded-r-xl"></TableHeadCell>
            </tr>
          </thead>
          <tbody>
            {dietData.map((diet) => 
              <tr key={diet.id} className="text-xs [&>*]:min-w-32 [&>*]: border-b-[1px] [&>*]:w-44 [&>*]:text-center [&>*]:p-4 [&>*]:font-primary [&>*]:textPurple w-full flex justify-between items-center">
                <td>{diet.name}</td>
                <td>{diet.dailyKcal}</td>
                <td>{diet.dailyProtein}</td>
                <td>{diet.dailyCarb}</td>
                <td>{diet.objective}</td>
                <td><Button variant={"default"}>Abrir dieta</Button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDiets;
