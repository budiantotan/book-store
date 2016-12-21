import Axios from 'axios';

// API url. this uses json-server mocking.
const apiUrl = 'http://localhost:3001/books';

// Get book
export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books
    };
};

export const fetchBooks = () => {
    return (dispatch) => {
        return Axios.get(apiUrl)
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
        type: 'CREATE_BOOK_SUCCESS',
        book
    };
};

export const createBook = (book) => {
    return (dispatch) => {
        return Axios.post(apiUrl, book)
            .then(response => {
                dispatch(createBookSuccess(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};