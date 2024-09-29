import axios from "axios";

//const baseUrl = "http://localhost:5000/v1/api/data"
const baseUrl = "https://crypto-dash-api-eight.vercel.app/v1/api/data"

export const getData = async(one:string, two?:string)=>{
    try{
        let q =  `${baseUrl}?one=${one}`;
        if(two) q = q.concat(`&two=${two}`)
        const {data} = await axios.get(q);
        return data?.data
    }catch(error){
        console.log('error', error)
        return error;
    }

}