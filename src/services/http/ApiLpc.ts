const LPC_API_URL = process.env.BACKEND_API_URL;

const ApiLpc = {
    PARTNER: {
        GET_DETAILS: `${LPC_API_URL}/partner?partnerUniq=`,
    },
};

export default ApiLpc;
