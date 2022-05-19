import axios from "axios";

const emailId='c3Hs9Z1w'

const url =`https://submit-form.com/${emailId}`;


export const postForm = async(value)=>{
return await axios.post(url, value)
}