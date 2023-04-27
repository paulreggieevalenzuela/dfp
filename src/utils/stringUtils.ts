export const extractInitials = (string: string) => {
  const fullString = string.trim().split(' ');
  const initials = fullString.reduce((acc, curr, index) => {
    if(index === 0 || index === fullString.length - 1){
      acc = `${acc}${curr.charAt(0).toUpperCase()}`;
    }
    return acc;
  }, '');
  return initials;
}