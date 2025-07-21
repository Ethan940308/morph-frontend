import { defineStore } from 'pinia';

export const useConstantStore = defineStore('constant', {
    state: () => {
        return {
            data: null
        };
    },
    getters: {
        getConstant: (state) => {
            return (constant_key, isFilter = false) => {
                if (state.data[constant_key] && isFilter) {
                    return [{ key: '', value: null, description: 'All' }].concat(state.data[constant_key]);
                }

                return state.data[constant_key];
            };
        },
        getConstantDropdownFilter: (state) => {
            return (constant_key) => {
                const response = [{ key: '', value: null, description: 'All' }].concat(state.data[constant_key]);
                const dropdown = response;
                const filter = response[0];
                return { dropdown, filter };
            };
        },
        getConstantValue: (state) => {
            return (constant_key, value_key) => {
                return state.data[constant_key].find((value) => value.key == value_key)?.value;
            };
        },
        getConstantData: (state) => {
            return (constant_key, value_key) => {
                return state.data[constant_key].find((value) => value.key == value_key);
            };
        },
        getPermissionConstantValue: (state) => {
            return (value_key) => {
                return state.data['admin_permission_type'].find((value) => value.key == value_key)?.value;
            };
        },
        isEmpty: (state) => {
            return !state.data || Object.keys(state.data).length === 0;
        }
    },
    persist: true
});