import {
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,

    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,

    PRODUCT_DELETE_REQUEST,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_DELETE_FAIL,

    PRODUCT_CREATE_REQUEST,
    PRODUCT_CREATE_SUCCESS,
    PRODUCT_CREATE_FAIL,
    PRODUCT_CREATE_RESET,

    PRODUCT_UPDATE_REQUEST,
    PRODUCT_UPDATE_SUCCESS,
    PRODUCT_UPDATE_FAIL,
    PRODUCT_UPDATE_RESET,

    PRODUCT_REVIEW_CREATE_REQUEST,
    PRODUCT_REVIEW_CREATE_SUCCESS,
    PRODUCT_REVIEW_CREATE_FAIL,
    PRODUCT_REVIEW_CREATE_RESET,

} from '../constants/productConstants';
//{*
//  /************/ GET PRODUCT LIST/***********/
//*}
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, product: [] };
        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading : false, error: action.payload };
        default:
            return state
    }
}

//{*
//  /************/ GET PRODUCT DETAILS/***********/
//*}
export const productDetailsReducer = (state = { product: { } }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
//{*
//  /************/ DELETE A PRODUCT/***********/
//*}
export const productDeleteReducer = ( state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return { loading: true };
        case PRODUCT_DELETE_SUCCESS:
            return { loading: false, success: true};
        case PRODUCT_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
//{*
//  /************/ CREATE A PRODUCT via ADMIN/***********/
//*}
export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return { loading: true};
        case PRODUCT_CREATE_SUCCESS:
            return { loading: false, product: action.payload, success: true };
        case PRODUCT_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_CREATE_RESET:
            return {};
        default:
            return state;
    }
};
//{*
//  /************/ UPDATE PRODUCT BY ADMIN/***********/
//*}
export const productUpdateReducer = (state = { product: { } }, action) => {
    switch (action.type) {
        case PRODUCT_UPDATE_REQUEST:
            return {loading: true };
        case PRODUCT_UPDATE_SUCCESS:
            return { loading: false, product: action.payload , success: true};
        case PRODUCT_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_UPDATE_RESET:
            return { product: {} };
        default:
            return state;
    }
};
//{*
//  /************/ CREATE A REVIEW POST ON PRODUCT/***********/
//*}
export const productReviewCreateReducer = (state = {} , action) => {
    switch (action.type) {
        case PRODUCT_REVIEW_CREATE_REQUEST:
            return { loading: true};
        case PRODUCT_REVIEW_CREATE_SUCCESS:
            return { loading: false, success: true};
        case PRODUCT_REVIEW_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case PRODUCT_REVIEW_CREATE_RESET:
            return { };
        default:
            return state;
    }
}