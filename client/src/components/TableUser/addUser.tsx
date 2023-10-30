import { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../../root-store-context";
import { checkDate } from "../../helpers/checkDate";
import style from "./TableUser/TableUser.module.css";

export const AddUser = observer(() => {
  const today: Date = new Date(Date.now());
  const month: number = today.getMonth() + 1;
  const { users } = useStores();
  const [newName, setNewName] = useState<string>("");
  const [newBorn, setNewBorn] = useState<string>(
    today.getFullYear() + "-" + month + "-" + today.getDate()
  );

  return (
    <div className={style.addBlock}>
      <div className={style.textForm}>Форма добавления данных</div>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        value={newName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewName(e.target.value);
        }}
        className={style.inputForm}
      />
      <input
        name="born"
        type="date"
        value={newBorn}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewBorn(e.target.value);
        }}
        className={style.inputForm}
      />
      <button
        disabled={!newName}
        className={style.btn}
        onClick={() => {
          users.addUser(newName, checkDate(newBorn));
          setNewName("");
          setNewBorn(today.getFullYear() + "-" + month + "-" + today.getDate());
        }}
      >
        Добавить
      </button>
    </div>
  );
});
