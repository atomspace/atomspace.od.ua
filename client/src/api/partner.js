import { createApiRequest } from './base';

/**
 * "name":"",
 * "email":"a@a.com",
 * "number":"1122",
 * "interest":"option1",
 * "information": "1122"
 */
export const createPartner = data =>
  createApiRequest('/partners', 'POST', data);

export const getAllPartners = () => createApiRequest('/partners', 'GET');
