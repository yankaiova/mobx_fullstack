import { makeAutoObservable, runInAction } from "mobx";
import { Users } from "../models/models";
import { getUsers } from "../api/getUsers";
import { postUsers } from "../api/postUsers";
import { arraysAreEqual } from "../helpers/arraysAreEqual";

const delay = (ms: number) => new Promise((_) => setTimeout(_, ms));

export class UserStore {
  initial: Users[] = [];
  draft: Users[] = [];
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isDisabled() {
    return arraysAreEqual(this.draft, this.initial);
  }

  getUsersAction = async () => {
    try {
      this.isLoading = true;
      await delay(1000);
      const data = await getUsers();
      runInAction(() => {
        this.draft = data;
        this.initial = data;
        this.isLoading = false;
      });
    } catch {
      this.isLoading = false;
    }
  };
  postUsersAction = async () => {
    try {
      this.isLoading = true;
      await delay(1000);
      await postUsers(this.draft);
      this.getUsersAction();
    } catch {
      this.isLoading = false;
    }
  };
  removeUser(id: number) {
    this.draft = this.draft.filter((user) => user.id !== id);
  }

  addUser(nameA: string, bornA: string) {
    const prev: Users = this.draft.reduce((acc, curr) =>
      acc.id > curr.id ? acc : curr
    );
    console.log(prev);
    const idA = this.draft.length === 0 ? 1 : prev.id + 1;
    const UserNew: Users = { id: idA, name: nameA, born: bornA, age: "?" };
    this.draft.push(UserNew);
  }
  editUser(id: number, newProps: string, props: string) {
    this.draft.map((user: Users) => {
      if (user.id === id && props === "name") {
        user.name = newProps;
      }
      if (user.id === id && props === "born") {
        user.born = newProps;
        if (this.isDisabled) {
          user.age = this.initial[user.id - 1].age;
        } else {
          user.age = "?";
        }
      }
      return user;
    });
  }
}
