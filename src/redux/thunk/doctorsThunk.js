import { getEmployees, getWorklog } from '../../api/api';
import { getDoctors } from '../actions/doctorsActions';

export const getAsyncDoctors = () => {
  return (dispatch) => {
    getEmployees()
      .then((response) => dispatch(getDoctors(response)))
      .catch((error) => console.log(error));
  };
};

export const getAsyncTimeWork = () => {
  return (dispatch) => {
    getWorklog()
      .then((response) => getAsyncTimeWork(response))
      .catch((error) => console.log(error));
  };
};
