import { AxiosService } from "@/services/AxiosService";

const base_url = '/v1/profile';

export const ProfileService = {
    index
};

function index(data) {
    return AxiosService.getWithAuthorization(base_url, data);
}