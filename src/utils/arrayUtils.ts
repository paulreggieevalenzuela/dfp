export const getSumByKey = (arr: any[], key: string) => {
  return arr.reduce(
    (accumulator, current) => accumulator + Number(current[key]),
    0
  );
};

export function arrayMove(array: any[], fromIndex: number, toIndex: number) {
  const element = array[fromIndex];
  array.splice(fromIndex, 1);
  array.splice(toIndex, 0, element);
  return array;
}

export function checkUserRoleName(rolesArray: { name: string }[], val: string) {
  const checkName = (obj: { name: string }) => obj.name === val;
  return rolesArray.some(checkName);
}
