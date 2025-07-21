/**
 * @author Ethan Lau
 * @email Ethan940308@gmail.com
 * @desc Pinia User Store
 */

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            id: null,
            name: null,
            access_token: null
        };
    },
    getters: {
        isLoggedIn: (state) => {
            return state.access_token && state.id ? true : false;
        },
        isVerified: (state) => {
            return state.access_token ? true : false
        }
    },
    persist: true
});