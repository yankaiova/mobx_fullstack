import axios from "axios";
import { Users } from "../models/models";
export async function postUsers(arrayDraft: Users[]) {
  await axios.post<string>(`${import.meta.env.VITE_API_URL}/edit`, arrayDraft);
}
