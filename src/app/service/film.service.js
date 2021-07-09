import { environment } from "../../environments/environment";
import axios from 'axios';

const url = environment.BaseURL;

export function getFilmByName(page, size) {
    return axios.get(`${url}/api/movies?page=${page}&size=${size}&sort=name`);
}

export function getFilmByView(page, size) {
    return axios.get(`${url}/api/movies?page=${page}&size=${size}&sort=view`);
}

export function getFilmByNewEst(page, size) {
    return axios.get(`${url}/api/movies?page=${page}&size=${size}&sort=newest`);
}


