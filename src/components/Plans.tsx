import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid"
import { Button } from "./ui/button"


const Plans = () => {
  return (
    <div className="py-4 max-w-7xl mx-auto text-center sm:text-start px-4 sm:px-12">
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
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold">
                Plano avançado
              </h3>
            </div>
            <p className="font-light text-sm sm:text-lg md:text-lg lg:text-lg xl:text-lg textPurple opacity-50 dark:text-gray-400">
              A melhor opção para você que quer um serviço completo.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-4xl sm:text-5xl font-extrabold">
                R$35
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
                <CheckCircleIcon className="min-w-6 max-w-6 text-primary" />
                <span className="text-sm sm:text-base">
                  Chatbot especializado 24hrs para tirar todas as suas
                  dúvidas
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircleIcon className="min-w-6 max-w-6 text-primary" />
                <span className="text-sm sm:text-base">
                  Recomendações de receitas diversas para suas dietas sem
                  afetar o ganho calórico.
                </span>
              </li>
            </ul>
            <div className="w-full">
              <Button
                variant={"default"}
                disabled={true}
                className="w-44 shadow-lg text-sm sm:text-md"
              >
                Em breve...
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Plans