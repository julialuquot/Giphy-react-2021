import { updateItems } from './partners.utils';

const PartnersReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isFetching: true,
                error: null,
                showNotificationSuccess: {
                    suspendPartner: false,
                    activatePartner: false,
                },
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };

        case 'GET_ALL_PARTNERS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                partners: action.payload,
                error: null,
            };
        case 'SUSPEND_PARTNERS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                partners: updateItems(state.partners, action.payload),
                error: null,
                showNotificationSuccess: {
                    suspendPartner: true,
                    activatePartner: false,
                },
            };
        case 'ACTIVE_PARTNERS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                partners: updateItems(state.partners, action.payload),
                error: null,
                showNotificationSuccess: {
                    suspendPartner: false,
                    activatePartner: true,
                },
            };

        default:
            return state;
    }
};

export default PartnersReducer;
