import { createApiRequest } from './base'

/**
 * "name":"",
 * "email":"a@a.com",
 * "number":"1122",
 * "information": "1122"
 */
export const createMentor = (data) => createApiRequest('/mentors', 'POST', data)

export const getAllMentors = () => createApiRequest('/mentors', 'GET')
