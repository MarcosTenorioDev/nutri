import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { environment } from "../environment";

// Defina o tipo para o contexto
type DietContextType = {
  diets: any[];
  getAllDiets: () => Promise<void>;
};

// Crie o contexto
const DietContext = createContext<DietContextType>({
  diets: [],
  getAllDiets: async () => {},
});

// Componente de provedor de contexto
export const DietProvider: any = ({ children }:any) => {
  const [diets, setDiets] = useState<any[]>([]);

  // Função para buscar todas as dietas
  const getAllDiets = async () => {
    try {
      const cookies = document.cookie;
      const getCookie = (name: string) => {
        const value = `; ${cookies}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(";").shift();
      };

      const token = getCookie("__session");

      if (!token) {
        // Faça o tratamento apropriado caso não haja token
        return;
      }

      const result = await axios.get(`${environment.api}/diet/allDiets`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      setDiets(result.data);
      return result.data
    } catch (err) {
      // Faça o tratamento de erro apropriado
      console.error("Erro ao buscar as dietas:", err);
    }
  };

  // Atualize as dietas quando o componente for montado
  useEffect(() => {
    getAllDiets();
  }, []);

  return (
    <DietContext.Provider value={{ diets, getAllDiets }}>
      {children}
    </DietContext.Provider>
  );
};

// Hook personalizado para utilizar o contexto de dietas
export const useDietContext = () => useContext(DietContext);
