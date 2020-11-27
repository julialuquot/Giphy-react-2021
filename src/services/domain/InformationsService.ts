import { axiosClient } from '@services/http/Http';
import API from '@services/http/Api';

const imageUpload = (body) => axiosClient().post(API.INFORMATIONS.IMAGE_UPLOAD, body);

const getBrand = (merchantUniq) => axiosClient().get(`${API.INFORMATIONS.GET_BRAND}${merchantUniq}`);
const updateBrand = (body) => axiosClient().put(API.INFORMATIONS.UPDATE_BRAND, JSON.stringify(body));

const getProducts = (merchantUniq) => axiosClient().get(`${API.INFORMATIONS.GET_PRODUCTS}${merchantUniq}`);
const updateProduct = (body) => axiosClient().put(API.INFORMATIONS.UPDATE_PRODUCT, JSON.stringify(body));

const informationsService = { imageUpload, getBrand, updateBrand, getProducts, updateProduct };

export default informationsService;
