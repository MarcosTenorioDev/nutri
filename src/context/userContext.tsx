import { createContext, useContext } from "react"
import axios, { AxiosResponse } from 'axios'
import { environment } from "../environment"

export type userContext = {
    userIsPaid(): Promise<boolean>
}


//Configurar para limpar o localStorage e os Cookies ao deslogar 
export const userContext = createContext<userContext>({
    async userIsPaid():Promise<boolean> {
        const cookies = document.cookie;

        const getCookie = (name: string) => {
            const value = `; ${cookies}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        }

        const token = getCookie('__session');

        if(!token){
            return false
        }

        try {
            const response : AxiosResponse = await axios.get(`${environment.api}/users/userStatus`, {
                headers: {
                    Authorization: `${token}`
                }
            });
            return response.data.isPaid

        } catch (error : any) {
            console.error("Error verifying user payment status:", error?.response?.data?.message);
            return false
        }
    },
})

export const useGlobalContext = () => useContext(userContext)
