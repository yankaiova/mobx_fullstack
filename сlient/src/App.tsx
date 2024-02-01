import { TableUser } from "./components/TableUser/TableUser/TableUser";
import { RootStoreContext } from "./root-store-context";
import { store } from "./store/root-store";
function App() {
  return (
    <RootStoreContext.Provider value={store}>
      <div className="App">
        <TableUser />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
