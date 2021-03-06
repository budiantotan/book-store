import Axios from 'axios';
import * as actionTypes from './actionTypes';

// API url. this uses json-server mocking.
const bookApiUrl = 'http://localhost:3001/books';
const cartApiUrl = 'http://localhost:3001/cart';

// Fetch books
export const fetchBooksSuccess = (books) => {
    return {
        type: actionTypes.FETCH_BOOKS_SUCCESS,
        books
    };
};

export const fetchBooks = () => {
    return (dispatch) => {
        return Axios.get(bookApiUrl)
            .then(response => {
                dispatch(fetchBooksSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

// Create book
export const createBookSuccess = (book) => {
    return {
        type: actionTypes.CREATE_BOOK_SUCCESS,
        book
    };
};

export const createBook = (book) => {
    return (dispatch) => {
        return Axios.post(bookApiUrl, book)
            .then(response => {
                dispatch(createBookSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};

// Fetch book by id
export const fetchBookByIdSuccess = (book) => {
    return {
        type: actionTypes.FETCH_BOOK_BY_ID_SUCCESS,
        book
    };
};

export const fetchBookById = (bookId) => {
    return (dispatch) => {
        return Axios.get(bookApiUrl + '/' + bookId)
            .then(response => {
                dispatch(fetchBookByIdSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};