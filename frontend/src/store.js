import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools} from '@redux-devtools/extension';
import { thunk} from 'redux-thunk';
import { cartReducer } from './reducers/cartReducer';
import {
     productListReducer,
     productDetailsReducer,
     productDeleteReducer,
     productCreateReducer,
     productUpdateReducer,
} from './reducers/productReducer';
import { 
    orderCreateReducer ,
    orderDetailsReducer ,
    orderMyListReducer,
    orderPayReducer,
    orderListReducer
} from './reducers/orderReducer'; 
import { 
    userLoginReducer,
    userUpdateReducer,
    userByIdReducer,
    userRegisterReducer,
    userListReducer,
    userDeleteReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
} from './reducers/userReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userById: userByIdReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMyList: orderMyListReducer,
    orderList: orderListReducer,
});

    {/* Fetch "Cart items list" from local user Machine  */}

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [] ;

    {/* Fetch "User Information" from local user Machine  */}

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;
    
    {/* Fetch "Address" from local user Machine  */}

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') 
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {} ;

    {/* Fetch "Payment type" from local user Machine  */}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') 
    ? JSON.parse(localStorage.getItem('paymentMethod')) 
    : 'paypal';

const initialState = {
    cart: { 
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
        paymentMethod: paymentMethodFromStorage,
     },
    userLogin: { userInfo: userInfoFromStorage }, // key from above reducer is set and value is given from localstorage to read saved data when store is loaded
};

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;  