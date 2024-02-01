import { makeAutoObservable } from "mobx";
import { UserStore } from "./user-store";

class RootStore {
  users = new UserStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export type { RootStore };
export const store = new RootStore();
