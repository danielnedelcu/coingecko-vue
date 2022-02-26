import axios from 'axios'
axios.defaults.withCredentials = true;

export default() => {
    return axios.create({
        baseURL: `https://api.coingecko.com/api/v3/`,
        withCredentials: false,
        headers: {            
            'Accept': 'application/json',
            'Content-Type': 'application/json',                  
        },
        mode: "cors"
    })
}