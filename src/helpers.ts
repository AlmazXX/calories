export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const convertTime = (date: Date) => {
  return new Date(date).toLocaleString("en-en", {
    hour: "numeric",
    minute: "numeric",
  });
};

export const convertDate = (date: Date) => {
  return new Date(date).toLocaleString("en-en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};