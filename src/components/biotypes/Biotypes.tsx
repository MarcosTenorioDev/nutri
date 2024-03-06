import biotypes from "../../assets/images/biotypes.png";

const Biotypes = () => {
  return (
    <div className="bg-nutriBlue w-screen p-5">
      <div className="bg-[#03A65A] bg-opacity-25 p-5 flex flex-col items-center min-h-screen lg:gap-0">
        <div className=" flex flex-col justify-center max-w-7xl lg:w-full">
          <h1 className="text-primary text-black text-2xl font-normal pt-2 mb-8">
            Biotipos
          </h1>
          <div className="lg:flex lg:gap-5">
          <img src={biotypes} alt="Imagem dos biotipos existentes" className="w-full max-w-[900px]"/>

          <div className="bg-[#1BC5BD] p-5 bg-opacity-25 mt-5 shadow-md shadow-slate-600 lg:max-w-[460px] lg:h-min lg:mt-0">
            O biotipo é uma classificação da constituição física baseada em
            altura, peso e distribuição de gordura. Existem três tipos
            principais: ectomorfo (magro e dificuldade em ganhar músculos),
            mesomorfo (ganha músculos facilmente e estrutura atlética) e
            endomorfo (tendência a acumular gordura e ganhar peso).
          </div>
          </div>

        </div>

        <div className="mt-10 flex flex-col gap-5 max-w-7xl lg:w-full">
          <div>
            <h2 className="font-bold text-lg mb-3">1. Ectomorfo</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <span className="font-bold">Homens:</span> Tendem a ser magros, com ombros estreitos e músculos
                mais finos. Dificuldade em ganhar peso e massa muscular.
              </li>
              <li>
              <span className="font-bold">Mulheres:</span> Possuem corpos delgados, com pouca gordura corporal e
                dificuldade em ganhar peso.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">2. Mesomorfo</h2>
            <ul className="flex flex-col gap-2">
              <li>
              <span className="font-bold">Homens:</span> Têm estrutura física atlética, com ombros largos,
                cintura estreita e facilidade em ganhar e manter massa muscular.
              </li>
              <li>
              <span className="font-bold">Mulheres:</span> Apresentam uma combinação de curvas bem definidas, com
                cintura fina e facilidade em tonificar os músculos.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-3">3. Endomorfo</h2>
            <ul className="flex flex-col gap-2">
              <li>
              <span className="font-bold">Homens:</span> Tendem a ter mais gordura corporal, especialmente na
                região abdominal, com estrutura óssea mais larga e dificuldade
                em perder peso.
              </li>
              <li>
              <span className="font-bold">Mulheres:</span> Podem ter formas arredondadas, com acúmulo de gordura
                em áreas como quadril, coxas e barriga, e acham difícil perder
                peso.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biotypes;
