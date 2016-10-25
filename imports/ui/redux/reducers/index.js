import { combineReducers } from 'redux'
import applicationReducer from './application.js';
import userReducer from './user.js';
import cartReducer from './cart.js';
import categoryReducer from './category.js';

const reducer = combineReducers({
  application: applicationReducer,
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
});

export default reducer
