import axios from "axios";
import { Users } from "../models/models";
export const getUsers = async () =>
  (await axios.get<Users[]>(`${import.meta.env.VITE_API_URL}/get`)).data;
