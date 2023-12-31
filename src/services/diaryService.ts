import diaryData from "../data/diaries";
import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from "../types";

const diaries: DiaryEntry[] = diaryData;

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const findById = (id: number): DiaryEntry | undefined =>
  diaries.find((d) => d.id === id);

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry: DiaryEntry = {
    id: Math.max(...diaries.map((d) => d.id)) + 1,
    ...entry,
  };

  diaries.push(newDiaryEntry);

  return newDiaryEntry;
};

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById,
};
