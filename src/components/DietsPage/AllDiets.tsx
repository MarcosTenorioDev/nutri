import { useEffect, useState } from "react";
import FormGenerateDiet from "../FormGenerateDiet";
import { TableHeadCell } from "../dietsTable/TableCells";
import { Button } from "../ui/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import { getAllDiets } from "@/services/diet.services";


const AllDiets = () => {
  const [dietData, setDietData] : any = useState([]);

  useEffect(()=> {
    getAllDiets().then((diets: any) => {
      const parsedDiets: any = [];
      diets.map((diet: any) => {
        try{
          const parsedDietData = JSON.parse(diet.dietData);
          diet.dietData = parsedDietData;
          parsedDiets.push(diet);
        }catch(err){
          console.log('dieta deu erro');
        }
      })
      setDietData(parsedDiets);
    })

  }, [AllDiets])
  
  return (
    <div className="w-full border-[1px] max-w-6xl mx-auto bg-white p-4 sm:p-6 flex flex-col gap-4 rounded-xl shadow-2xl lg:p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-primary font-semibold textPurple sm:text-xl lg:text-2xl ">Minhas dietas</h2>
        <FormGenerateDiet>Criar dieta <PlusIcon className="w-5" /></FormGenerateDiet>
      </div>
      <div className="overflow-scroll w-full bg-[]">
        <table className=" w-full flex flex-col gap-4">
          <thead className="w-max bg-[#F3F6F9] rounded-xl xl:w-full">
            <tr className="text-sm [&>*]:min-w-32 [&>*]:p-4  [&>*]:w-44 [&>*]:whitespace-nowrap [&>*]:font-primary [&>*]:textPurple opacity-50 w-full flex justify-between items-center">
              <TableHeadCell>Nome</TableHeadCell>
              <TableHeadCell>Kcal diárias</TableHeadCell>
              <TableHeadCell>Proteínas diárias</TableHeadCell>
              <TableHeadCell>Carboidratos diários</TableHeadCell>
              <TableHeadCell>Objetivo</TableHeadCell>
              <TableHeadCell></TableHeadCell>
            </tr>
          </thead>
          <tbody>
            {dietData.map((diet : any) =>   
              <tr key={diet.id} className="text-md min-w-max [&>*]:min-w-32 [&>*]: border-b-[1px] [&>*]:w-44 [&>*]:text-center [&>*]:p-4 [&>*]:font-primary [&>*]:textPurple w-full flex justify-between items-center">
                <td>{diet.name}</td>
                <td>{diet.dietData?.IngestaoDiaria.Calorias}</td>
                <td>{diet.dietData?.IngestaoDiaria.Proteina}</td>
                <td>{diet.dietData?.IngestaoDiaria.Carboidratos}</td>
                <td>{diet.dietData?.Objetivo}</td>
                <td><Button variant={"default"}>Ver dieta</Button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDiets;
