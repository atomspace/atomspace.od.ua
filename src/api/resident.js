import { createApiRequest } from "./base";

export const createResident = async data => {
  try {
    return await createApiRequest("/residents", "POST", data);
  } catch (e) {
    console.log(e);
  }
};

export const getAllResidents = async () => {
    try {
      return await createApiRequest("/residents", "GET");
    } catch (e) {
      console.log(e);
    }
  };