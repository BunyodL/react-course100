import { UserType } from '../../@types/types';

export const updateObjectInArray = (
  items: Array<UserType | undefined>,
  itemId: number,
  objPropName: string,
  newObjProps: {
    followed: boolean;
  }
) =>
  items.map((u) => {
    if (u) {
      return u[objPropName as keyof UserType] === itemId
        ? { ...u, ...newObjProps }
        : u;
    } else {
      return u;
    }
  });
