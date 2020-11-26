import { axiosClient } from '@services/http/Http';
import API from '@services/http/Api';

const imageUpload = (body) => axiosClient().post(API.INFORMATIONS.IMAGE_UPLOAD, body);

const getBrand = (body) => axiosClient().post(API.INFORMATIONS.GET_BRAND, body);

const updateBrand = (body) => axiosClient().post(API.INFORMATIONS.UPDATE_BRAND, body);

const informationsService = { imageUpload, getBrand, updateBrand };

export default informationsService;
