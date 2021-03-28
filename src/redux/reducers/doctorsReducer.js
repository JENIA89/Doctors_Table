import { sortName } from '../../components/Helpers/helpers';
import { GET_DOCTORS, GET_WORK_TIME } from '../actions/actionTypes';

const initialState = {
  employees: [],
  worklog: [],
  loading: true,
};

export default function doctorsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOCTORS:
      return {
        ...state,
        employees: sortName(action.payload),
        loading: false,
      };
    case GET_WORK_TIME:
      return { ...state, worklog: action.payload, loading: false };
    default:
      return state;
  }
}
