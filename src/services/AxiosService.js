
import axios from 'axios';
import { useUserStore } from '@/stores/user';
/**
 * Axios Setting and Credential
 */
const base_url = import.meta.env.VITE_BACKEND_BASE_URL;

export const AxiosService = {
    get,
    getWithAuthorization,
    post
};

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Content-Encoding': 'gzip'
    },
    validateStatus: function (status) {
        return status < 500; // Resolve only if the status code is less than 500
    }
});

/**
 *
 * @param {String} url
 */
function get(url) {
    return instance
        .get(base_url + url)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            errorHandling(error);
        });
}

/**
 *
 * @param {String} url
 * @param { * | Null} data
 * @return
 */
async function getWithAuthorization(url, data = null) {
    const access_token = useUserStore().access_token;
    return instance
        .get(base_url + url, {
            params: data,
            headers: { Authorization: 'Bearer ' + access_token }
        })
        .then((response) => {
            errorHandling(response);
            return response.data;
        })
        .catch((error) => {
            errorHandling(error);
        });
}

/**
 *
 * @param {String} url
 * @param {*} data
 * @return
 */
function post(url, data) {
    return instance
        .post(base_url + url, data)
        .then((response) => {
            errorHandling(response);
            return response.data;
        })
        .catch((error) => {
            errorHandling(error);
        });
}



function errorHandling(error) {
    if (error.code == 'ERR_NETWORK') {
        console.log(error);
    } else {
        const ErrorStatus = error.response?.status ?? error.status;
        switch (ErrorStatus) {
            case 401:
                useUserStore().$reset();
                break;
            case 403:
                break;
            case 404:
                break;
            case 500:
                console.log(error);
                break;
        }
    }
}