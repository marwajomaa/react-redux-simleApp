// reducers is a function that returns a piece of application state it produce the value of the state)
//because the app has many different type of state then we have many reducers
//the app state has 2 peice of state one for producing list of books and the other for producing selected book so we have 2 type of reducers
import { combineReducers } from 'redux';
import BooksReducer from './book_reducer';

export const rootReducers =
  combineReducers({
  books: BooksReducer,
})
