const apiURL = process.env.BACKEND_API_URL;

const API = {
    AUTH: {
        SIGN_IN: `${apiURL}/login`,
        SIGN_OUT: `${apiURL}/logout`,
    },
    INFORMATIONS: {
        IMAGE_UPLOAD: `${apiURL}/images`,
        GET_BRAND: `${apiURL}/brands?merchantUniq=`,
        UPDATE_BRAND: `${apiURL}/brands`,
        GET_TUTORIAL: `${apiURL}/how-it-works?merchantUniq=`,
        UPDATE_TUTORIAL: `${apiURL}/how-it-works`,
        GET_PRODUCTS: `${apiURL}/products?merchantUniq=`,
        UPDATE_PRODUCT: `${apiURL}/products`,
    },
};

export default API;
