import { axiosClient } from '@services/http/Http';
import API from '@services/http/Api';

const imageUpload = (body) => axiosClient().post(API.INFORMATIONS.IMAGE_UPLOAD, body);

const getBrand = (partnerUniq) => axiosClient().get(`${API.INFORMATIONS.GET_BRAND}${partnerUniq}`);
const updateBrand = (body) => axiosClient().put(API.INFORMATIONS.UPDATE_BRAND, JSON.stringify(body));
const resetBrand = (body) => axiosClient().put(API.INFORMATIONS.RESET_BRAND, JSON.stringify(body));

const getTutorial = (partnerUniq) => axiosClient().get(`${API.INFORMATIONS.GET_TUTORIAL}${partnerUniq}`);
const updateTutorial = (body) => axiosClient().put(API.INFORMATIONS.UPDATE_TUTORIAL, JSON.stringify(body));
const resetTutorial = (body) => axiosClient().put(API.INFORMATIONS.RESET_TUTORIAL, JSON.stringify(body));

const getProducts = (partnerUniq) => axiosClient().get(`${API.INFORMATIONS.GET_PRODUCTS}${partnerUniq}`);
const updateProduct = (body) => axiosClient().put(API.INFORMATIONS.UPDATE_PRODUCT, JSON.stringify(body));
const resetProduct = (body) => axiosClient().put(API.INFORMATIONS.RESET_PRODUCT, JSON.stringify(body));

const goOnLine = (body) => axiosClient().put(API.PARTNER.GO_ONLINE, JSON.stringify(body));

const informationsService = {
    imageUpload,
    getBrand,
    updateBrand,
    resetBrand,
    getTutorial,
    updateTutorial,
    resetTutorial,
    getProducts,
    updateProduct,
    resetProduct,
    goOnLine,
};

export default informationsService;
