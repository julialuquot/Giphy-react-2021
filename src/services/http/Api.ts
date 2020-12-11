const apiURL = process.env.BACKEND_API_URL;

const API = {
    AUTH: {
        SIGN_IN: `${apiURL}/login`,
        SIGN_OUT: `${apiURL}/logout`,
    },
    INFORMATIONS: {
        IMAGE_UPLOAD: `${apiURL}/images`,
        GET_BRAND: `${apiURL}/brands?partnerUniq=`,
        UPDATE_BRAND: `${apiURL}/brands`,
        RESET_BRAND: `${apiURL}/brands`,
        GET_TUTORIAL: `${apiURL}/how-it-works?partnerUniq=`,
        UPDATE_TUTORIAL: `${apiURL}/how-it-works`,
        RESET_TUTORIAL: `${apiURL}/how-it-works`,
        GET_PRODUCTS: `${apiURL}/products?partnerUniq=`,
        UPDATE_PRODUCT: `${apiURL}/products`,
        RESET_PRODUCT: `${apiURL}/products`,
        GET_PRODUCTS_INTRODUCTION: `${apiURL}/partners?partnerUniq=`,
        UPDATE_PRODUCTS_INTRODUCTION: `${apiURL}/partners`,
    },
    PARTNER: {
        GO_ONLINE: `${apiURL}/partners`,
        GET_ALL: `${apiURL}/partners-admin`,
        SUSPEND: `${apiURL}/partners`,
        ACTIVATE: `${apiURL}/partners`,
    },
};

export default API;
