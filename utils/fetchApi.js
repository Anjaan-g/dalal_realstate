import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-key': '3db4e5be1emsh7b190a0031aa874p1c47f4jsn5a9722557686',
            'x-rapidapi-host': 'bayut.p.rapidapi.com'
        }
    })

    return data;
}
