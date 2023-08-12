import express from "express";
import diaryService from "../services/diaryService";
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
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addedEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch (err) {
    let errorMessage = "Something went wrong.";
    if (err instanceof Error) {
      errorMessage += " Error : " + err.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
