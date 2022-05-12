import axios from "axios";

const emailId='DBgJAN3P'

const url =`https://submit-form.com/${emailId}`;


export const postForm = async(value)=>{
return await axios.post(url, value)
}