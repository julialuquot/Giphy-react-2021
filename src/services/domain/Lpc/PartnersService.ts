import { axiosClient } from '@services/http/Http';
import ApiLpc from '@services/http/ApiLpc';

const getPartnerDetails = (partnerUniq) => axiosClient().get(`${ApiLpc.PARTNER.GET_DETAILS}${partnerUniq}`);

const partnersService = {
    getPartnerDetails,
};

export default partnersService;
