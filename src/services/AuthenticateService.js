/**
 * @author Ethan Lau
 * @email Ethan940308@gmail.com
 * @create date 2023-04-26 10:35:19
 * @modify date 2023-04-26 10:35:19
 * @desc Authenticate Service Api
 */

import { AxiosService } from "@/services/AxiosService";

const base_url = '/v1/auth';

export const AuthenticateService = {
    login,
    register
};

/**
 * 
 * @param {*} data 
 */
function login(data) {
    return AxiosService.post(base_url + '/login', data);
}

function register(data) {
    return AxiosService.post(base_url + '/register', data);
}
