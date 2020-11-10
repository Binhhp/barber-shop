import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import home from './HomePage/reducer';
import blog from './BlogPage/reducer';
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    home,
    blog
  });
