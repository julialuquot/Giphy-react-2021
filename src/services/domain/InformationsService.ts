import { axiosClient } from '@services/http/Http';
import API from '@services/http/Api';

const imageUpload = (body) => axiosClient().post(API.INFORMATIONS.IMAGE_UPLOAD, body);

const getBrand = (merchantUniq) => axiosClient().get(`${API.INFORMATIONS.GET_BRAND}${merchantUniq}`);
const updateBrand = (body) => axiosClient().put(API.INFORMATIONS.UPDATE_BRAND, JSON.stringify(body));
const resetBrand = (body) => axiosClient().put(API.INFORMATIONS.RESET_BRAND, JSON.stringify(body));

const getTutorial = (merchantUniq) => axiosClient().get(`${API.INFORMATIONS.GET_TUTORIAL}${merchantUniq}`);
const updateTutorial = (body) => axiosClient().put(API.INFORMATIONS.UPDATE_TUTORIAL, JSON.stringify(body));
const resetTutorial = (body) => axiosClient().put(API.INFORMATIONS.RESET_TUTORIAL, JSON.stringify(body));

const getProducts = (merchantUniq) => axiosClient().get(`${API.INFORMATIONS.GET_PRODUCTS}${merchantUniq}`);
const updateProduct = (body) => axiosClient().put(API.INFORMATIONS.UPDATE_PRODUCT, JSON.stringify(body));
const resetProduct = (body) => axiosClient().put(API.INFORMATIONS.RESET_PRODUCT, JSON.stringify(body));

const goOnLine = (body) => axiosClient().put(API.MERCHANT.GO_ONLINE, JSON.stringify(body));

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
