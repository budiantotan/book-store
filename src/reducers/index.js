// Set up your root reducer here...
import { combineReducers } from 'redux';
import { bookReducer, booksReducer } from './bookReducers';
import cart from './cartReducers';

export default combineReducers({
    books: booksReducer,
    book: bookReducer,
    cart
});