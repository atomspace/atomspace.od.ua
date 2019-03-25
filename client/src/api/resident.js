import { createApiRequest } from "./base";

export const createResident = async data => {
  return await createApiRequest("/residents", "POST", data);
};

export const getAllResidents = async () => {
  return await createApiRequest("/residents", "GET");
};
