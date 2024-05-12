import axios from "axios";

export default async function getGeneratedPeoples() {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (error) {
        console.error("Error while get generate peoples: ", error);
        return null;
    }
};