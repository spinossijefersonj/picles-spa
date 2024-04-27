import { ISheltert } from "../../interfaces/shelter"
import httpClient from '../api/httpClient'


export async function getShelter(): Promise<ISheltert> {
    try {
        const response = await httpClient.get('/shelter')
        return response.data
    } catch (error)
 {
    console.error('Erro ao buscar abrigo', error)
    throw error
 }    

}
    