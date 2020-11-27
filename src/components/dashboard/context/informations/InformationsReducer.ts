const InformationsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return {
                ...state,
                isFetching: true,
            };
        case 'GET_BRAND_SUCCESS':
            return {
                ...state,
                isFetching: false,
                brand: action.payload,
            };
        case 'GET_BRAND_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case 'GET_PRODUCTS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                products: action.payload,
            };
        case 'GET_PRODUCTS_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        case 'UPDATE_PRODUCT_SUCCESS':
            return {
                ...state,
                isFetching: false,
                products: updateProduct(state.products, action.payload),
            };
        case 'UPDATE_PRODUCT_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

const updateProduct = (products, productToUpdate) => {
    const existingCartItem = products.find((product) => product.order === productToUpdate.order);

    if (existingCartItem) {
        return products.map((product) => (product.order === productToUpdate.order ? { ...productToUpdate } : product));
    }

    return [...products, { ...productToUpdate }];
};

export default InformationsReducer;
