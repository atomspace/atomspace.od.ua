import { createApiRequest } from './base';

export const getAllMerches = () => {
  return createApiRequest('/merches', 'GET');
};

export const sendRequestForMerch = () => {
  return createApiRequest('/orders', 'GET');
};
