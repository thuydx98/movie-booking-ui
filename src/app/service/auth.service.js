import { environment } from "../../environments/environment";
import axios from 'axios';

const url = environment.BaseURL;

export function SignIn(data) {
    return axios.post(`${url}/api/auth/sign-in`, data);
}

export function SignUp(data) {
    return axios.post(`${url}/api/auth/sign-up`, data);
}

export function checkCode(data) {
    return axios.post(`${url}/api/auth/check-activation-code`, data);
}

export function forgetPassword(data) {
    return axios.post(`${url}/api/auth/forgot-password`, data);
}
