import { combineReducers } from 'redux';
import { reducer as userInfo } from 'reduxs/userInfo';
import { reducer as registerInfo } from 'reduxs/registerInfo';
import { reducer as orders } from 'reduxs/orders';

const reducersApp = combineReducers({
  userInfo,
  registerInfo,
  orders
});

export default reducersApp;
