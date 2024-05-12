import axios from "axios";

export async function getAddress(data: string) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${data}/json/`);
        
        if (response.data.erro) {
            return null;
        }
        
        return response;
    } catch (error) {
        console.error("Error while get postal code: ", error);
        return null;
    }
};