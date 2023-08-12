import { NewDiaryEntry } from "../types";

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
