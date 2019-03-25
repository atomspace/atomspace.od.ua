import { createApiRequest } from "./base";

export const createMentor = async data => {
  return await createApiRequest("/mentors", data, "POST");
};
