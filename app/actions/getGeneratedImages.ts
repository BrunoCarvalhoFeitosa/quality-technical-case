import axios from "axios";

export default async function getGeneratedImages() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
        return response.data.slice(0, 50);
    } catch (error) {
        console.error("Error while get generate photos: ", error);
        return null;
    }
};