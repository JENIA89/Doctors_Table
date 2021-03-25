import { GET_DOCTORS, GET_WORK_TIME } from './actionTypes';

export const getDoctors = (data) => {
  return {
    type: GET_DOCTORS,
    payload: data,
  };
};

export const getTimeWork = (data) => {
  return {
    type: GET_WORK_TIME,
    payload: data,
  };
};
