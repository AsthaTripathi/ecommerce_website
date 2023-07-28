import axios from 'axios';

const URL = '';


export const authenticateSignup = async (user) => {
    try{
return await axios.post(`${URL}/signup`, user);
    }catch(error) {
        console.log('Error while calling signup api', error);
    }
}

export const authenticateLogin = async (user) => {
    try{
return await axios.post(`${URL}/login`, user);
    }catch(error) {
        console.log('Error while calling login api',error);
        return error.response;
    }
}

export const payUsingPaytm = async (data) => {
    try{
         let response = await axios.post(`${URL}/payment`, data);
         return response.data;
    }catch(error) {
        console.log('Error while calling payment api', error);
    }
}