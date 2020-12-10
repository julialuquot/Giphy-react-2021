import { axiosClient } from '@services/http/Http';
import API from '@services/http/Api';

const getAllPartners = () => axiosClient().get(`${API.PARTNER.GET_ALL}`);
const activatePartner = (body) => axiosClient().put(API.PARTNER.ACTIVATE, JSON.stringify(body));
const suspendPartner = (body) => axiosClient().put(API.PARTNER.SUSPEND, JSON.stringify(body));

const partnersService = {
    getAllPartners,
    suspendPartner,
    activatePartner,
};

export default partnersService;
