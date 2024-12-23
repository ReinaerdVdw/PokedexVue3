import axios,  {AxiosInstance} from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";
const apiInstance : AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
})

export function api(){
    return apiInstance;
}