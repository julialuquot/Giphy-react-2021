import { axiosClient } from '@services/http/Http';
import ApiDashboard from '@services/http/ApiDashboard';

const getAllPartners = () => axiosClient().get(`${ApiDashboard.PARTNER.GET_ALL}`);
const activatePartner = (body) => axiosClient().put(ApiDashboard.PARTNER.ACTIVATE, JSON.stringify(body));
const suspendPartner = (body) => axiosClient().put(ApiDashboard.PARTNER.SUSPEND, JSON.stringify(body));
const getChanges = (partnerUniq) => axiosClient().get(`${ApiDashboard.PARTNER.GET_CHANGES}${partnerUniq}`);
const getPartnerDetails = (partnerUniq) =>
    axiosClient().get(`${ApiDashboard.PARTNER.GET_DETAILS}${partnerUniq}&online=true`);

const partnersService = {
    getAllPartners,
    suspendPartner,
    activatePartner,
    getChanges,
    getPartnerDetails,
};

export default partnersService;
