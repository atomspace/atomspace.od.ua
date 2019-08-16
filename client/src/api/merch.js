import { createApiRequest } from './base';

export const getAllMerches = () => {
  return createApiRequest('/merches', 'GET');
};

export const getRequestForMerch = () => {
  return createApiRequest('/orders', 'GET');
};
export const createRequestForMerch = (data) => {
  return createApiRequest('/orders', 'POST', data);
};
