import { Users } from "../models/models";
function objAreEqual(obj1: Users, obj2: Users) {
  return (
    JSON.stringify(obj1.born) === JSON.stringify(obj2.born) &&
    JSON.stringify(obj1.name) === JSON.stringify(obj2.name)
  );
}
export function arraysAreEqual(arr1: Users[], arr2: Users[]) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let equalElement: number = 0;
    arr1.forEach((item1: Users) => {
      arr2.forEach((item2: Users) => {
        if (objAreEqual(item1, item2)) {
          equalElement++;
        }
      });
    });
    return equalElement === arr1.length;
  }
}
