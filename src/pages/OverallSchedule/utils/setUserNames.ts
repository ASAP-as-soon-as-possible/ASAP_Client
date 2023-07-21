export const filterUserNames = (inputArray: string[] | undefined): string[] => {
  return Array.from(new Set(inputArray));
};
