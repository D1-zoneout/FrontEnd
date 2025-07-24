import axios from "axios";
import { config } from "./config";
import { body } from "framer-motion/client";


export async function registerProvider(
name , 
email,
password,
phone


) { 
    try{
        const url = `${config.serverUrl}/Provider/register`
      const body = {
        name,
        email,
        password,
        phone

      }
           const response = await axios.post(url , body)
    }catch(e){
        console.log('exceptyion' , e);
    }
 
}
export async function loginProvider(email, password) {
  try {
    // create url
    const url = `${config.serverUrl}/Provider/login`

    // create the body
    const body = {
      email,
      password,
    }

    // make the API call
    const response = await axios.post(url, body)

    // return response body
    return response.data
  } catch (ex) {
    console.error('exception: ', ex)
  }
}
