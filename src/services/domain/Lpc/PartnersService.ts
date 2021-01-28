import { axiosClient } from '@services/http/Http';
import ApiLpc from '@services/http/ApiLpc';

const getPartnerDetails = (partnerUniq: string) =>
    axiosClient()
        .get(`${ApiLpc.PARTNER.GET_DETAILS}${partnerUniq}`, {})
        .then((res) => res.data);

const partnersService = {
    getPartnerDetails,
};

export default partnersService;
