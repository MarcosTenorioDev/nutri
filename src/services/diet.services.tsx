import axios from "axios";
import { environment } from "../environment";

//modificar a regra de criar dieta no backend e criar o prompt lá
//tipar o payload corretamente
export async function postDiet(payload: any) {
  const cookies = document.cookie;

  const getCookie = (name: string) => {
    const value = `; ${cookies}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  const token = getCookie("__session");

  if (!token) {
    return false;
  }

  try{
    await axios.post(`${environment.api}/diet`,payload, {
        headers: {
          Authorization: `${token}`,
        }
      }); 
  }catch(err: any){
    throw new Error(err)
  }
  
}

export async function getAllDiets(){

  const cookies = document.cookie;

  const getCookie = (name: string) => {
    const value = `; ${cookies}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  const token = getCookie("__session");

  if (!token) {
    return false;
  }


  try{
    const result = await axios.get(`${environment.api}/diet/allDiets`,{
        headers: {
          Authorization: `${token}`,
        }
      }); 
      const diets = result.data
      return diets
  }catch(err: any){
    throw new Error(err)
  }


}

export async function deleteDietById(id: string){
  const cookies = document.cookie;

  const getCookie = (name: string) => {
    const value = `; ${cookies}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift();
  };

  const token = getCookie("__session");

  if (!token) {
    return false;
  }

  try{
    const result = await axios.delete(`${environment.api}/diet/${id}`,{
        headers: {
          Authorization: `${token}`,
        }
      }); 
      return result
  }catch(err: any){
    throw new Error(err)
  }

}