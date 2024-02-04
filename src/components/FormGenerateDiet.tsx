import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input, CheckboxUserTerms }from "./Input";

const FormGenerateDiet = (props: any) => {
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

  const onSubmit = (values: any) => {
    console.log("Formulário submetido:", values);
  };

  return (
    <Dialog>
      <DialogTrigger>
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
                  <Input control="indispensableFoods">indispensableFoods</Input>
                  <Input control="objective">objective</Input>
                  <Input control="lives">lives</Input>
                </div>
              </div>
              <div className="flex items-center mb-4 pt-3">
                <CheckboxUserTerms control='userTerms' >asdasdasd</CheckboxUserTerms>
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
    </Dialog>
  );
};

export default FormGenerateDiet;
