import express from "express";
import diaryService from "../services/diaryService";
import { NewDiaryEntry } from "../types";
import { toNewDiaryEntry } from "../utils/utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const diary = diaryService.findById(+id);

  diary ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (req, res) => {
  const newDiaryEntry: NewDiaryEntry = toNewDiaryEntry(req.body);
  const addedEntry = diaryService.addDiary(newDiaryEntry);
  res.json(addedEntry);
});

export default router;
