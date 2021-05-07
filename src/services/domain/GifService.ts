import { axiosClient } from '@services/http/Http';

const getGifDetails = (id:string, ctx?: string) =>
    axiosClient(ctx)
        .get(`localHost/3000/giphy/${id}`, {})
        .then((res) => console.log('gif work-----' + res.data))
        .catch((err) => console.log(err));

const gifService = {
    getGifDetails,
};

export default gifService;

