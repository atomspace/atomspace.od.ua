import { createApiRequest } from "./base";

export const createMentor = async data => {
  try {
    return await createApiRequest("/mentors", data, "POST");
  } catch (e) {
    console.log(e);
  }
};