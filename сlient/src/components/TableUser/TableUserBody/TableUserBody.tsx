import { observer } from "mobx-react-lite";
import { Users } from "../../../models/models";
import { useStores } from "../../../root-store-context";
import { useEffect } from "react";
import style from "./TableUserBody.module.css";
import { checkDate } from "../../../helpers/checkDate";

export const TableUserBody = observer(() => {
  const { users } = useStores();
  useEffect(() => {
    users.getUsersAction();
  }, []);

  return (
    <div className={style.tableBody}>
      {users.draft.map((item: Users) => (
        <div key={item.id} className={style.tableRow}>
          <input
            value={item.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              users.editUser(item.id, e.target.value, "name")
            }
            className={style.tableCell}
          />
          <input
            type="date"
            value={checkDate(item.born)}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              users.editUser(item.id, checkDate(e.target.value), "born");
            }}
            className={style.tableCell}
          />
          <div className={style.tableCell} onClick={() => console.log(item.id)}>
            {item.age}
          </div>
          <button
            className={style.btn}
            onClick={() => users.removeUser(item.id)}
          >
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
});
