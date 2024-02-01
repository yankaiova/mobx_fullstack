import { observer } from "mobx-react-lite";
import { TableUserBody } from "../TableUserBody/TableUserBody";
import { useStores } from "../../../root-store-context";
import { AddUser } from "../addUser";
import style from "./TableUser.module.css";

export const TableUser = observer(() => {
  const { users } = useStores();

  return (
    <div>
      <div>
        <div className={style.tableHeader}>
          <div>Имя</div>
          <div>Дата рождения</div>
          <div>Возраст</div>
        </div>
        <TableUserBody />
        {users.isLoading && <div>Загрузка...</div>}
      </div>
      <AddUser />
      <button
        className={style.btn}
        disabled={users.isDisabled}
        onClick={() => {
          users.postUsersAction();
        }}
      >
        Отправить
      </button>
    </div>
  );
});
