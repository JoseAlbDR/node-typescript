import { NewDiaryEntry, Visibility, Weather } from "../types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if (!isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }
  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date:" + date);
  }
  return date;
};

const isWeather = (param: string): param is Weather => {
  return Object.values(Weather)
    .map((w) => w.toString())
    .includes(param);
};

const parseWeather = (weather: unknown): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather:" + weather);
  }
  return weather;
};

const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility)
    .map((v) => v.toString())
    .includes(param);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing visibility:" + visibility);
  }
  return visibility;
};

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (!object || typeof object !== "object")
    throw new Error("Incorrect or missing data");

  if (
    "comment" in object &&
    "date" in object &&
    "visibility" in object &&
    "weather" in object
  ) {
    const parsedComment = parseComment(object.comment);
    const parsedVisibility = parseVisibility(object.visibility);
    const parsedDate = parseDate(object.date);
    const parsedWeather = parseWeather(object.weather);

    const newEntry: NewDiaryEntry = {
      weather: parsedWeather,
      visibility: parsedVisibility,
      date: parsedDate,
      comment: parsedComment,
    };
    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};
