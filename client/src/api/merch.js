import {
  createApiRequest
} from "./base";


export const getAllMerches = () => {
  return createApiRequest("/merches", "GET");
};

