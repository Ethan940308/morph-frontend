import { AxiosService } from "@/services/AxiosService";

const base_url = '/v1/config';

export const ConstantService = {
    index
};

function index(data) {
    return AxiosService.get(base_url + '/constants', data);
}