import { combineReducers } from 'redux';
import doctorsReducer from './doctorsReducer';

const rootRedicer = combineReducers({ doctors: doctorsReducer });

export default rootRedicer;
