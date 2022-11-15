import {NextFunction, Request, Response} from "express";
import mongoose from "mongoose";
import Flashcard from "../models/Flashcard.model";

const createFlashcard = async (req: Request, res: Response, next: NextFunction) => {
  const { meaning, translation, category } = req.body;

  const flashcard = new Flashcard({
    _id: new mongoose.Types.ObjectId(),
    meaning,
    translation,
    category,
    date: new Date().toLocaleDateString(),
  });

  try {
   await flashcard.save();
   return res.status(201).json({ flashcard });
  } catch (err) {
    return res.status(500).json({ err });
  }
}

const getAllFlashcards = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const flashcards = await Flashcard.find();
    res.status(200).json({ flashcards });
    return flashcards;
  } catch (err) {
    res.status(500).json({ err });
  }
}

const getOneFlashcard = async (req: Request, res: Response, next: NextFunction) => {
  const flashcardId = req.params.id;

  try {
    const flashcard = await Flashcard.findById(flashcardId);
    flashcard ? res.status(200).json({ flashcard }) : res.status(404).json({ message: 'Not found' });
    return flashcard;
  } catch (err) {
    res.status(500).json({ err });
  }
}

const updateFlashcard = async (req: Request, res: Response, next: NextFunction) => {
  const flashcardId = req.params.id;

  try {
    const flashcard = await Flashcard.findById(flashcardId);
    if(flashcard) {
      flashcard.set(req.body);
      await flashcard.save();
      res.status(201).json({ flashcard });
    } else {
      res.status(404).json({message: 'Not found'});
    }
    return flashcard;
  } catch (err) {
    res.status(500).json({ err });
  }
}

const deleteFlashcard = async (req: Request, res: Response, next: NextFunction) => {
  const flashcardId = req.params.id;

  try {
    const flashcard = await Flashcard.findByIdAndDelete(flashcardId);
    flashcard ? res.status(201).json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' });
  } catch (err) {
    res.status(500).json({ err });
  }
}

export default {createFlashcard, getAllFlashcards, getOneFlashcard, updateFlashcard, deleteFlashcard};
