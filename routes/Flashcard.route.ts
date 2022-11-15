import express from 'express';
import controller from '../controllers/Flashcard.controller';

export const flashcardRouter = express.Router();

flashcardRouter
  .get('/:id', controller.getOneFlashcard)
  .get('/', controller.getAllFlashcards)
  .post('/', controller.createFlashcard)
  .patch('/:id', controller.updateFlashcard)
  .delete('/:id', controller.deleteFlashcard)