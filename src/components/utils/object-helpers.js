export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map(u => (u[objPropName] === itemId ? { ...u, ...newObjProps } : u));
};
// return items.map(u => {
//   if (u[objPropName] === itemId) {
//     return { ...u, ...newObjProps };
//   }
//   return u;
// })
