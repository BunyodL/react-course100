import { UserType } from "types/types";

export const updateObjectInArray = (items: Array<UserType>, itemId: number, objPropName: string, newObjProps: {
  followed: boolean
}): Array<UserType> => {
  return items.map((u) => (u[objPropName as keyof UserType] === itemId ? { ...u, ...newObjProps } : u));
};
// return items.map(u => {
//   if (u[objPropName] === itemId) {
//     return { ...u, ...newObjProps };
//   }
//   return u;
// })
