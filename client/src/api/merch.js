import { createApiRequest } from "./base";

export const getAllMerches = () => createApiRequest("/merches", "GET");

export const getRequestForMerch = () => createApiRequest("/orders", "GET");
export const createRequestForMerch = (data) => createApiRequest("/orders", "POST", data);
