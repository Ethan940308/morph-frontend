import { AxiosService } from "@/services/AxiosService";

const base_url = '/v1/content/';

export const ContentService = {
    show
};

function show(type) {
    return AxiosService.get(base_url + type);
}