import express from 'express';

export const wordsRouter = express.Router();

//Get all flashcards
wordsRouter
  .get('/', (req, res) => {
    res.send('Okay');
})
//Add flashcard
  .post('/', (req, res) => {

})
//Updating flashcard
  .patch('/:id', (req, res) => {

  })
//Deleting flashcard
  .delete('/:id', (req, res) => {

  });


