import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

export const formatDate = (date) => {
    if (!date) {
        return '-';
    }
    return moment(date).format('DD/MM/YYYY');
};

export default { formatDate };
