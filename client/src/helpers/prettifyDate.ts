import { format } from "date-fns";

export const prettifyDate = (date: string): string => {
  return format(new Date(date), "do LLL");
};
