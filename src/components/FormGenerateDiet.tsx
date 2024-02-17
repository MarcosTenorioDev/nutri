import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input, CheckboxUserTerms } from "./Input";
import { postDiet } from "@/services/diet.services";
import { useRef, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import LoadingDiet from "./LoadingDiet";


const FormGenerateDiet = (props: any) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    dietName: "",
    username: "",
    height: "",
    weight: "",
    age: "",
    gender: "",
    biotype: "",
    activityFrequence: "",
    foodRestriction: "",
    indispensableFoods: "",
    objective: "",
    lives: "",
    userTerms: false,
  };

  const validationSchema = Yup.object({
    dietName: Yup.string().required("Nome da dieta é obrigatório"),
    username: Yup.string().required("Nome é obrigatório"),
    height: Yup.number().required("Campo obrigatório"),
    weight: Yup.number().required("Campo obrigatório"),
    age: Yup.number().required("Campo obrigatório"),
    gender: Yup.string().required("Campo obrigatório"),
    biotype: Yup.string().required("Campo obrigatório"),
    activityFrequence: Yup.string().required("Campo obrigatório"),
    foodRestriction: Yup.string().required("Campo obrigatório"),
    indispensableFoods: Yup.string().required("Campo obrigatório"),
    objective: Yup.string().required("Campo obrigatório"),
    lives: Yup.string().required("Campo obrigatório"),
    userTerms: Yup.boolean().isTrue("Termos de uso é obrigatório"),
  });

  const modalRef = useRef<HTMLButtonElement | null>(null);
  function closeModal() {
    console.log(modalRef.current)
    if (modalRef.current) {
      modalRef.current.click();
    }
  }

  const sucessToast = () => {
    toast({
      title: "Nutri.io",
      description: "Sua dieta foi criada com sucesso!",
    });
  };

  const errorToast = (values: any) => {
    toast({
      variant: "destructive",
      title: "Oops... parece que temos um problema.",
      description:
        "Houve um erro ao criar sua dieta, por favor, tente novamente.",
      
      action: (
        <ToastAction
          altText="Tente novamente"
          onClick={() => {
            onSubmit(values, false);
          }}
        >
          Tente novamente
        </ToastAction>
      ),
    });
  };

  //modificar a regra de criar dieta no backend e criar o prompt lá e apenas enviar o formulário
  //modificar prompt e chaves do json no componente de AllDiets
  const onSubmit = async (values: any, showErrorToast? : any) => {
    setLoading(true)
    closeModal();
    const { userTerms, dietName, ...payload } = values;
    const prompt = `Faça uma dieta para uma pessoa chamada ${payload.username}, 
    altura:${payload.height}, 
    idade: ${payload.age}, 
    sexo: ${payload.sex}, 
    biotipo: ${payload.biotype},
    que pratica atividade física: ${payload.activityFrequence},
    comidas restritas (não adicione nada que contenha): ${payload.restrictFoods},
    comidas indispensáveis (não esqueça de adicionar): ${payload.indispensableFoods},
    objetivo da dieta: ${payload.objective},
    gere de ${payload.dailyRefsNumber} refeições diárias para atingir o objetivo, caso possível, caso não, explique o motivo,
    escolha preferencialmente alimentos fáceis de encontrar em: ${payload.lives}.
    Retorne uma resposta em forma de JSON, e É OBRIGATORIAMENTE QUE FAÇA A DIETA DE SEGUNDA À DOMINGO. Quero dados gerais de ingestão calórica diária, ingestão de proteína diária e 
    ingestão de carboidratos diários dessa dieta criada e também quaisquer outras informações que você julgar útil. Segue o modelo do JSON, PREENCHA TODOS OS 
    DADOS VAZIOS OBRIGATORIAMENTE DE ACORDO COM A DIETA SOLICITADA, SIGA ESTRITAMENTE O MODELO DO JSON E NÃO ESQUEÇA NENHUM CAMPO VAZIO!! e principalmente, 
    nunca esqueça de colocar todos os dias de segunda a domingo com todas as refeições preenchidas e também os dados da ingestão diária(ex: proteina: 180g, carboidratos: 300g e calorias: 4000Kcal) de forma alguma!!!!
    lembre-se também de sempre especificar a quantidade das porções ou unidades de comidas geradas e também **busque não repetir as refeições mais de uma vez durante a semana, se atente a isso**:
    {
      "Nome": "${payload.name}",
      "Objetivo": "${payload.objective}",
      "IngestaoDiaria": {
        "Proteina": "...g",
        "Carboidratos": "...g",
        "Calorias": "...Kcal"
      },
      "Refeicoes": [
        {
          "Dia": "Segunda-feira",
          "CafeDaManha": "valores dinâmicos de acordo com a solicitação da dieta",
          "LancheDaManha": "valores dinâmicos de acordo com a solicitação da dieta",
          "Almoco": "valores dinâmicos de acordo com a solicitação da dieta",
          "LancheDaTarde": "valores dinâmicos de acordo com a solicitação da dieta",
          "Jantar": "valores dinâmicos de acordo com a solicitação da dieta",
          "Ceia": "valores dinâmicos de acordo com a solicitação da dieta"
        },
      ],
      "InformacoesAdicionais": "nesse campo adicione qualquer coisa que achar válido para a dieta em específico"
    }
    `;
    const dietPayload = { dietName, prompt };
    try {
      await postDiet(dietPayload).then(() => {
        sucessToast();
      });
    } catch (error) {
      if(showErrorToast){
        console.log(error);
        errorToast(values);
      }
      console.log(error);
    }
    setLoading(false)
  };

  return (
    <>
      <Toaster />
      {loading ? <LoadingDiet/> : <Dialog>
        <DialogTrigger ref={modalRef}>
          <div className="flex items-center gap-2 text-sm bg-primary text-primary-foreground shadow hover:bg-primary/90 justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4">
            {props.children}
          </div>
        </DialogTrigger>
        <DialogContent className="bg-nutriBlue w-11/12 sm:w-10/12 h-5/6 lg:w-full rounded-xl border-2 border-primary xl:min-w-max xl:h-auto">
          <h2 className="font-primary text-2xl textPurple font-bold">
            Vamos lá !
          </h2>
          <h3 className="font-primary textPurple opacity-70 text-md">
            Mas antes, precisamos de algumas informações suas.
          </h3>
          <div className="overflow-auto flex justify-center">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="flex flex-col w-full p-2">
                <div className="w-full flex flex-col xl:flex-row xl:gap-6">
                  <div className="w-full xl:w-6/12 flex flex-col justify-between">
                    <Input control="dietName">Diet Name</Input>
                    <Input control="username">Username</Input>
                    <div className="flex gap-4 justify-between">
                      <div className="w-5/12 flex flex-col gap-0">
                        <Input control="height">height</Input>
                        <Input control="weight">weight</Input>
                      </div>
                      <div className="w-5/12 flex flex-col gap-0">
                        <Input control="age">age</Input>
                        <Input control="gender">gender</Input>
                      </div>
                    </div>

                    <Input control="biotype">biotype</Input>
                  </div>

                  <div className="w-full xl:w-6/12">
                    {" "}
                    <Input control="activityFrequence">activityFrequence</Input>
                    <Input control="foodRestriction">foodRestriction</Input>
                    <Input control="indispensableFoods">
                      indispensableFoods
                    </Input>
                    <Input control="objective">objective</Input>
                    <Input control="lives">lives</Input>
                  </div>
                </div>
                <div className="flex items-center mb-4 pt-3">
                  <CheckboxUserTerms control="userTerms">
                    asdasdasd
                  </CheckboxUserTerms>
                </div>

                <div className="w-full flex justify-center">
                  <Button
                    type="submit"
                    className="min-w-44 md:text-base xl:text-xl xl:p-5"
                  >
                    Enviar
                  </Button>
                </div>
              </Form>
            </Formik>
          </div>
        </DialogContent>
      </Dialog>}
    </>
  );
};

export default FormGenerateDiet;
