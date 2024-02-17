import { useEffect, useState } from "react";
import FormGenerateDiet from "../FormGenerateDiet";
import { TableHeadCell } from "../dietsTable/TableCells";
import { Button } from "../ui/button";
import { PlusIcon } from "@heroicons/react/24/solid";
import { deleteDietById, getAllDiets } from "@/services/diet.services";
import { TrashIcon } from "@heroicons/react/24/solid";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ToastAction } from "../ui/toast";
import { toast } from "../ui/use-toast";

const AllDiets = () => {
  const [dietData, setDietData]: any = useState([]);
  const [disableDeleteButton, setDisableDeleteButton] = useState(false)

  useEffect(() => {
    getAllDiets().then((diets: any) => {
      const parsedDiets: any = [];
      diets.map((diet: any) => {
        try {
          const parsedDietData = JSON.parse(diet.dietData);
          diet.dietData = parsedDietData;
          parsedDiets.push(diet);
        } catch (err) {
          console.log("dieta deu erro");
          deleteDiet(diet.id)
        }
      });
      setDietData(parsedDiets);
    }).catch((error) => {
      console.error(error)
      errorToastGetAllDiets();
    });
  }, [AllDiets]);

  const deleteDiet = (id: any, showErrorToast: boolean = true) => {
    setDisableDeleteButton(true)
      deleteDietById(id).then(() => getAllDiets().then((diets: any) => {
        const parsedDiets: any = [];
        diets.map((diet: any) => {
          try {
            const parsedDietData = JSON.parse(diet.dietData);
            diet.dietData = parsedDietData;
            parsedDiets.push(diet);
            sucessToast()
          } catch (err) {
            errorToast(diet)
            console.log("Erro ao renderizar dieta ");
          }
          setDietData(parsedDiets);
          setDisableDeleteButton(false)
        });
      })).catch((error) => {
        if(showErrorToast){
          errorToast(id)
        }
        console.error(error)
        setDisableDeleteButton(false)
      })


  
  }

  const sucessToast = () => {
    toast({
      title: "Nutri.io",
      description: "Sua dieta foi excluida com sucesso!",
    });
  };

  const errorToast = (id: string) => {
    toast({
      variant: "destructive",
      title: "Oops... parece que temos um problema.",
      description:
        "Houve um erro ao excluir sua dieta, por favor, tente novamente.",
      
      action: (
        <ToastAction
          altText="Tente novamente"
          onClick={() => {
            deleteDiet(id, false)
          }}
        >
          Tente novamente
        </ToastAction>
      ),
    });
  };

  const errorToastGetAllDiets = () => {
    toast({
      variant: "destructive",
      title: "Sinto muito! parece que temos um problema...",
      description:
        "Houve um erro ao recuperar suas dietas, aguarde um minuto, já estamos resolvendo.",
    });
  };

  return (
    <div className="w-full border-[1px] max-w-6xl mx-auto bg-white p-4 sm:p-6 flex flex-col gap-4 rounded-xl shadow-2xl lg:p-10">
      <div className="flex justify-between items-center">
        <h2 className="text-base font-primary font-semibold textPurple sm:text-xl lg:text-2xl ">
          Minhas dietas
        </h2>
        <FormGenerateDiet>
          Criar dieta <PlusIcon className="w-5" />
        </FormGenerateDiet>
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
            {dietData.map((diet: any) => (
              <tr
                key={diet.id}
                className="text-md min-w-max [&>*]:min-w-32 [&>*]: border-b-[1px] [&>*]:w-44 [&>*]:text-center [&>*]:p-4 [&>*]:font-primary [&>*]:textPurple w-full flex justify-between items-center"
              >
                <td>{diet.name}</td>
                <td>{diet.dietData?.IngestaoDiaria.Calorias}</td>
                <td>{diet.dietData?.IngestaoDiaria.Proteina}</td>
                <td>{diet.dietData?.IngestaoDiaria.Carboidratos}</td>
                <td>{diet.dietData?.Objetivo}</td>
                <td className="flex items-center justify-center gap-3">
                  <Button variant={"default"}>Ver dieta</Button>
                  <AlertDialog>
                    <AlertDialogTrigger disabled={disableDeleteButton}>
                      <TrashIcon className={`${disableDeleteButton ? 'text-muted w-9 pb-1' : '  text-destructive w-9 pb-1 hover:text-destructive/90'}`} />
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white border-red-600 border-2">
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Você tem certeza que deseja excluir sua dieta?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                        Essa ação não pode ser desfeita. Isso vai excluir sua dieta permanentemente.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction className="bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90" onClick={() => deleteDiet(diet.id)}>
                          Excluir dieta
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDiets;
