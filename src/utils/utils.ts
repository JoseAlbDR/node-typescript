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

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  console.log(object);
  const newEntry: NewDiaryEntry = {
    weather: "cloudy",
    visibility: "great",
    date: "2023-1-1",
    comment: "fake news",
  };

  return newEntry;
};
