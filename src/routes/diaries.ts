import express from "express";
import diaryService from "../services/diaryService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const diary = diaryService.findById(+id);

  diary ? res.send(diary) : res.sendStatus(404);
});

router.post("/", (_req, res) => {
  res.send("Saving a diary!");
});

export default router;
