import { axiosClient } from '@services/http/Http';
import ApiDashboard from '@services/http/ApiDashboard';

const imageUpload = (body) => axiosClient().post(ApiDashboard.INFORMATIONS.IMAGE_UPLOAD, body);

const getBrand = (partnerUniq) => axiosClient().get(`${ApiDashboard.INFORMATIONS.GET_BRAND}${partnerUniq}`);
const updateBrand = (body) => axiosClient().put(ApiDashboard.INFORMATIONS.UPDATE_BRAND, JSON.stringify(body));
const resetBrand = (body) => axiosClient().put(ApiDashboard.INFORMATIONS.RESET_BRAND, JSON.stringify(body));

const getTutorial = (partnerUniq) => axiosClient().get(`${ApiDashboard.INFORMATIONS.GET_TUTORIAL}${partnerUniq}`);
const updateTutorial = (body) => axiosClient().put(ApiDashboard.INFORMATIONS.UPDATE_TUTORIAL, JSON.stringify(body));
const resetTutorial = (body) => axiosClient().put(ApiDashboard.INFORMATIONS.RESET_TUTORIAL, JSON.stringify(body));

const getProducts = (partnerUniq) => axiosClient().get(`${ApiDashboard.INFORMATIONS.GET_PRODUCTS}${partnerUniq}`);
const updateProduct = (body) => axiosClient().put(ApiDashboard.INFORMATIONS.UPDATE_PRODUCT, JSON.stringify(body));
const resetProduct = (body) => axiosClient().put(ApiDashboard.INFORMATIONS.RESET_PRODUCT, JSON.stringify(body));

const getProductsIntroduction = (partnerUniq) =>
    axiosClient().get(`${ApiDashboard.INFORMATIONS.GET_PRODUCTS_INTRODUCTION}${partnerUniq}&productsIntroduction=true`);
const updateProductsIntroduction = (body) =>
    axiosClient().put(ApiDashboard.INFORMATIONS.UPDATE_PRODUCTS_INTRODUCTION, JSON.stringify(body));

const goOnLine = (body) => axiosClient().put(ApiDashboard.PARTNER.GO_ONLINE, JSON.stringify(body));

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
    getProductsIntroduction,
    updateProductsIntroduction,
    goOnLine,
};

export default informationsService;
