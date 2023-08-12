import { NewDiaryEntry } from "../types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }

  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date:" + date);
  }
  return date;
};

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  console.log(object);

  const parsedComment = parseComment(object.comment);

  const newEntry: NewDiaryEntry = {
    weather: "cloudy",
    visibility: "great",
    date: "2023-1-1",
    comment: parsedComment,
  };

  return newEntry;
};
