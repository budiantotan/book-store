import Axios from 'axios';
import * as actionTypes from './actionTypes';

// API url. this uses json-server mocking.
const cartApiUrl = 'http://localhost:3001/cart';


// Fetch cart
export const fetchCartSuccess = (items) => {
    return {
        type: actionTypes.FETCH_CART_SUCCESS,
        items
    };
};

export const fetchCart = () => {
    return (dispatch) => {
        return Axios.get(cartApiUrl)
            .then(response => {
                dispatch(fetchCartSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

// Add to cart
export const addToCartSuccess = (item) => {
    return {
        type: actionTypes.ADD_TO_CART_SUCCESS,
        item
    };
};

export const addToCart = (item) => {
    return (dispatch) => {
        return Axios.post(cartApiUrl, item)
            .then(response => {
                dispatch(addToCartSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};