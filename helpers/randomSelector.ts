export const randomElementSelector = (list: string[]) =>
  list[Math.floor(Math.random() * list.length)];
