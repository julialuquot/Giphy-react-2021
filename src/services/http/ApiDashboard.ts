const DASHBOARD_API_URL = `${process.env.BACKEND_API_URL}/merchant-dashboard`;

const ApiDashboard = {
    AUTH: {
        SIGN_IN: `${DASHBOARD_API_URL}/login`,
        SIGN_OUT: `${DASHBOARD_API_URL}/logout`,
    },
    INFORMATIONS: {
        IMAGE_UPLOAD: `${DASHBOARD_API_URL}/images`,
        GET_BRAND: `${DASHBOARD_API_URL}/brands?partnerUniq=`,
        UPDATE_BRAND: `${DASHBOARD_API_URL}/brands`,
        RESET_BRAND: `${DASHBOARD_API_URL}/brands`,
        GET_TUTORIAL: `${DASHBOARD_API_URL}/how-it-works?partnerUniq=`,
        UPDATE_TUTORIAL: `${DASHBOARD_API_URL}/how-it-works`,
        RESET_TUTORIAL: `${DASHBOARD_API_URL}/how-it-works`,
        GET_PRODUCTS: `${DASHBOARD_API_URL}/products?partnerUniq=`,
        UPDATE_PRODUCT: `${DASHBOARD_API_URL}/products`,
        RESET_PRODUCT: `${DASHBOARD_API_URL}/products`,
        GET_PRODUCTS_INTRODUCTION: `${DASHBOARD_API_URL}/partners?partnerUniq=`,
        UPDATE_PRODUCTS_INTRODUCTION: `${DASHBOARD_API_URL}/partners`,
    },
    PARTNER: {
        GO_ONLINE: `${DASHBOARD_API_URL}/partners`,
        GET_ALL: `${DASHBOARD_API_URL}/partners-admin`,
        SUSPEND: `${DASHBOARD_API_URL}/partners`,
        ACTIVATE: `${DASHBOARD_API_URL}/partners`,
        GET_CHANGES: `${DASHBOARD_API_URL}/changes?partnerUniq=`,
        GET_DETAILS: `${DASHBOARD_API_URL}/partner?partnerUniq=`,
    },
    MERCHANT: {
        GO_ONLINE: `${DASHBOARD_API_URL}/merchants`,
        GET_ALL: `${DASHBOARD_API_URL}/merchants`,
        SUSPEND: `${DASHBOARD_API_URL}/merchants`,
        ACTIVATE: `${DASHBOARD_API_URL}/merchants`,
    },
};

export default ApiDashboard;
